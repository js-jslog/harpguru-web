import React from 'react'
import { ApparatusIds, InteractionIds } from 'harpstrata'
import type { HarpStrata } from 'harpstrata'
import { DegreeIds } from 'harpstrata'
import { render } from '@testing-library/react'

import { getTheme } from '../index'

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
const theme = getTheme()

test('HoleInteraction renders a dom element with the expected value included', () => {
  const { getByText } = render(<HoleInteraction harpstrata={harpstrata} yxCoord={[0,1]} theme={theme} />)
  expect(getByText(DegreeIds.Second)).toBeInTheDocument()
})

test('HoleInteraction renders an invisible dom element if it is undefined', () => {
  const expectedStyle = `
    visibility: hidden;
  `
  const { container } = render(<HoleInteraction harpstrata={harpstrata} yxCoord={ [1,0] } theme={theme} />)
  expect(container.firstChild).toHaveStyle(expectedStyle)
})

test('HoleInteraction renders with a class identifying it\'s position in the matrix', () => {
  const { getByText } = render(<HoleInteraction harpstrata={harpstrata} yxCoord={ [0,0] } theme={theme} />)
  expect(getByText(DegreeIds.Root).getAttribute('class')).toMatch(/yx-coord-0-0/)
})
