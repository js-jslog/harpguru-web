import React from 'react'
import type { HarpStrata } from 'harpstrata'
import { ApparatusIds, DegreeIds, InteractionIds } from 'harpstrata'
import { render } from '@testing-library/react'

import { getTheme } from '../Theme'

import { HarpFace } from './index'

const apparatus = {
  id: ApparatusIds.MajorDiatonic,
  halfstepIndexMatrix: [[0, 1], [undefined, 2]],
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
const theme = getTheme()

test('HarpFace renders a dom element with the required grid styles when a two column strata matrices are provided', () => {
  const expectedStyle = `
    display: grid;
    grid-template-columns: auto auto;
  `
  const { container } = render(<HarpFace harpstrata={ harpstrata } theme={theme} />)
  expect(container.firstChild).toHaveStyle(expectedStyle)
})
