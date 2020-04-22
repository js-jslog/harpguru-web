import React from 'react'
import type { DegreeMatrix } from 'harpstrata'
import { DegreeIds } from 'harpstrata'
import { render } from '@testing-library/react'

import { HarpFace } from './index'

test('HarpFace renders multiple HoleInteraction components', () => {
  const degreeMatrix: DegreeMatrix = [[{ id: DegreeIds.Root }, { id: DegreeIds.Second }]]
  const { getByText } = render(<HarpFace degreeMatrix={ degreeMatrix }/>)
  expect(getByText(DegreeIds.Root)).toBeInTheDocument()
  expect(getByText(DegreeIds.Second)).toBeInTheDocument()
})

test('HarpFace renders a dom element with the required grid styles', () => {
  const degreeMatrix: DegreeMatrix = [[{
    id: DegreeIds.Root 
  }]]
  const expectedStyle = `
    display: grid;
    grid-template-columns: auto;
  `
  const { container } = render(<HarpFace degreeMatrix={ degreeMatrix }/>)
  expect(container.firstChild).toHaveStyle(expectedStyle)
})

test('HarpFace renders a dom element with the required grid styles when a two column DegreeMatrix is provided', () => {
  const degreeMatrix: DegreeMatrix = [[
    { id: DegreeIds.Root },
    { id: DegreeIds.Second }
  ]]
  const expectedStyle = `
    display: grid;
    grid-template-columns: auto auto;
  `
  const { container } = render(<HarpFace degreeMatrix={ degreeMatrix }/>)
  expect(container.firstChild).toHaveStyle(expectedStyle)
})

test('The HoleInteraction children have correct styles on them', () => {
  const degreeMatrix: DegreeMatrix = [
    [undefined            , {id: DegreeIds.Root}  , {id: DegreeIds.Second}],
    [{id: DegreeIds.Third}, {id: DegreeIds.Fourth}, undefined             ],
  ]
  const expectedStylesUndefined = `
    color: white;
    border-width: 0px;
    border-color: black;
    border-left-width: 0px;
    font-size: 30px;
    text-align: center;
  `
  const expectedStylesVoidLeft = `
    color: black;
    border-width: 0px;
    border-color: black;
    border-left-width: 0px;
    font-size: 30px;
    text-align: center;
  `
  const expectedStylesNonVoidLeft = `
    color: black;
    border-width: 0px;
    border-color: black;
    border-left-width: 1px;
    font-size: 30px;
    text-align: center;
  `
  const { getAllByText, getByText } = render(<HarpFace degreeMatrix={ degreeMatrix }/>)
  expect(getAllByText('/')[0]).toHaveStyle(expectedStylesUndefined)
  expect(getByText(DegreeIds.Root)).toHaveStyle(expectedStylesVoidLeft)
  expect(getByText(DegreeIds.Second)).toHaveStyle(expectedStylesNonVoidLeft)
  expect(getByText(DegreeIds.Third)).toHaveStyle(expectedStylesVoidLeft)
  expect(getByText(DegreeIds.Fourth)).toHaveStyle(expectedStylesNonVoidLeft)
  expect(getAllByText('/')[1]).toHaveStyle(expectedStylesUndefined)
})
