import React from 'react'
import { ApparatusIds, InteractionIds } from 'harpstrata'
import type { HarpStrata } from 'harpstrata'
import { DegreeIds } from 'harpstrata'
import { render } from '@testing-library/react'

import { HoleInteraction } from './index'

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

test('HoleInteraction renders a dom element with the expected value included', () => {
  const { getByText } = render(<HoleInteraction harpstrata={harpstrata} yxCoord={ [0,1] } />)
  expect(getByText(DegreeIds.Second)).toBeInTheDocument()
})

test('HoleInteraction renders a dom element with a left border if it is not the leftmost', () => {
  const expectedStyle = `
    color: black;
    border-width: 0px;
    border-color: black;
    border-style: solid;
    border-left-width: 1px;
    font-size: 30px;
    text-align: center;
  `
  const { getByText } = render(<HoleInteraction harpstrata={harpstrata} yxCoord={ [0,1] } />)
  expect(getByText(DegreeIds.Second)).toHaveStyle(expectedStyle)
})

test('HoleInteraction renders a dom element without a left border if it is the leftmost', () => {
  const expectedStyle = `
    color: black;
    border-width: 0px;
    border-color: black;
    border-style: solid;
    border-left-width: 0px;
    font-size: 30px;
    text-align: center;
  `
  const { getByText } = render(<HoleInteraction harpstrata={harpstrata} yxCoord={ [0,0] } />)
  expect(getByText(DegreeIds.Root)).toHaveStyle(expectedStyle)
})

test('HoleInteraction renders a dom element with \'/\' content and white color if it is undefined', () => {
  const expectedStyle = `
    color: white;
  `
  const { getByText } = render(<HoleInteraction harpstrata={harpstrata} yxCoord={ [1,0] } />)
  expect(getByText('/')).toHaveStyle(expectedStyle)
})

test('HoleInteraction renders with a class identifying it\'s position in the matrix', () => {
  const { getByText } = render(<HoleInteraction harpstrata={harpstrata} yxCoord={ [0,0] } />)
  expect(getByText(DegreeIds.Root).getAttribute('class')).toMatch(/yx-coord-0-0/)
})
