import React from 'react'
import type { DegreeMatrix } from 'harpstrata'
import { DegreeIds } from 'harpstrata'
import { render } from '@testing-library/react'

import { HoleInteraction } from './index'

test('HoleInteraction renders a dom element with the expected value included', () => {
  const degreeMatrix: DegreeMatrix = [[
    {id: DegreeIds.Second}, {id: DegreeIds.Flat3}
  ]]
  const { getByText } = render(<HoleInteraction degreeMatrix={degreeMatrix} yxCoord={ [0,1] } />)
  expect(getByText(DegreeIds.Flat3)).toBeInTheDocument()
})

test('HoleInteraction renders a dom element with a left border if the position next to it is not void', () => {
  const degreeMatrix: DegreeMatrix = [[
    {id: DegreeIds.Second}, {id: DegreeIds.Flat3}
  ]]
  const expectedStyle = `
    color: black;
    border-width: 0px;
    border-color: black;
    border-style: solid;
    border-left-width: 1px;
    font-size: 30px;
    text-align: center;
  `
  const { getByText } = render(<HoleInteraction degreeMatrix={degreeMatrix} yxCoord={ [0,1] } />)
  expect(getByText(DegreeIds.Flat3)).toHaveStyle(expectedStyle)
})

test('HoleInteraction renders a dom element without a left border if there are no holes directly to it\'s left', () => {
  const degreeMatrix: DegreeMatrix = [[
    {id: DegreeIds.Flat3}, {id: DegreeIds.Third}
  ]]
  const expectedStyle = `
    color: black;
    border-width: 0px;
    border-color: black;
    border-style: solid;
    border-left-width: 0px;
    font-size: 30px;
    text-align: center;
  `
  const { getByText } = render(<HoleInteraction degreeMatrix={degreeMatrix} yxCoord={ [0,0] } />)
  expect(getByText(DegreeIds.Flat3)).toHaveStyle(expectedStyle)
})

test('HoleInteraction renders a dom element with \'/\' conent and white color without a left border if it is void itelf', () => {
  const degreeMatrix: DegreeMatrix = [[
    undefined, {id: DegreeIds.Third}
  ]]
  const expectedStyle = `
    color: white;
    border-width: 0px;
    border-color: black;
    border-style: solid;
    border-left-width: 0px;
    font-size: 30px;
    text-align: center;
  `
  const { getByText } = render(<HoleInteraction degreeMatrix={degreeMatrix} yxCoord={ [0,0] } />)
  expect(getByText('/')).toHaveStyle(expectedStyle)
})

test('HoleInteraction renders with a class identifying it\'s position in the matrix', () => {
  const degreeMatrix: DegreeMatrix = [[
    {id: DegreeIds.Flat3}, {id: DegreeIds.Third}
  ]]
  const { getByText } = render(<HoleInteraction degreeMatrix={degreeMatrix} yxCoord={ [0,0] } />)
  expect(getByText(DegreeIds.Flat3).getAttribute('class')).toMatch(/yx-coord-0-0/)
})
