import React from 'react'
import type { HarpStrata } from 'harpstrata'
import { ApparatusIds, DegreeIds, InteractionIds } from 'harpstrata'
import { render } from '@testing-library/react'

import { HarpFace } from './index'

const apparatus = {
  id: ApparatusIds.MajorDiatonic,
  halfstepIndexMatrix: [[ 0, 1]],
  interactionMatrix: [
    [{id: InteractionIds.Blow}, {id: InteractionIds.Blow}],
    [undefined                , {id: InteractionIds.Draw}],
  ],
}
const harpstrata: HarpStrata = {
  apparatus,
  degreeMatrix: [
    [{ id: DegreeIds.Root }, { id: DegreeIds.Second }],
    [undefined             , { id: DegreeIds.Third }],
  ]
}

test('HarpFace renders a dom element with the required grid styles when a two column strata matrices are provided', () => {
  const expectedStyle = `
    display: grid;
    grid-template-columns: auto auto;
  `
  const { container } = render(<HarpFace harpstrata={ harpstrata }/>)
  expect(container.firstChild).toHaveStyle(expectedStyle)
})

test('The HoleInteraction children have correct styles on them', () => {
  const expectedStylesUndefined = `
      color: white;
      border-width: 0px;
      border-color: black;
      border-left-width: 0px;
      font-size: 30px;
      text-align: center;
    `
  const expectedStylesLeftmost = `
    color: black;
    border-width: 0px;
    border-color: black;
    border-left-width: 0px;
    font-size: 30px;
    text-align: center;
  `
  const expectedStylesNonLeftmost = `
    color: black;
    border-width: 0px;
    border-color: black;
    border-left-width: 1px;
    font-size: 30px;
    text-align: center;
  `
  const { getByText } = render(<HarpFace harpstrata={ harpstrata }/>)
  expect(getByText('/')).toHaveStyle(expectedStylesUndefined)
  expect(getByText(DegreeIds.Root)).toHaveStyle(expectedStylesLeftmost)
  expect(getByText(DegreeIds.Second)).toHaveStyle(expectedStylesNonLeftmost)
})
