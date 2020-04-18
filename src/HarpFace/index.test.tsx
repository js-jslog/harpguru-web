import React from 'react'
import type { DegreeMatrix } from 'harpstrata'
import { DegreeIds } from 'harpstrata'
import { render, screen } from '@testing-library/react'

import { HarpFace } from './index'

test('HarpFace renders multiple HoleInteraction components', () => {
  const degreeMatrix: DegreeMatrix = [[{ id: DegreeIds.Root }, { id: DegreeIds.Second }]]
  render(<HarpFace degreeMatrix={ degreeMatrix }/>)
  expect(screen.getByText(DegreeIds.Root)).toBeInTheDocument()
  expect(screen.getByText(DegreeIds.Second)).toBeInTheDocument()
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
    border-color: black;
    border: 0px;
    border-left: 0px;
    font-size: 30px;
    text-align: centre;
  `
  const expectedStylesVoidLeft = `
    color: black;
    border-color: black;
    border: 0px;
    border-left: 0px;
    font-size: 30px;
    text-align: centre;
  `
  const expectedStylesNonVoidLeft = `
    color: black;
    border-color: black;
    border: 0px;
    border-left: 1px;
    font-size: 30px;
    text-align: centre;
  `
  render(<HarpFace degreeMatrix={ degreeMatrix }/>)
  expect(screen.getAllByText('/')[0]).toHaveStyle(expectedStylesUndefined)
  expect(screen.getByText(DegreeIds.Root)).toHaveStyle(expectedStylesVoidLeft)
  expect(screen.getByText(DegreeIds.Second)).toHaveStyle(expectedStylesNonVoidLeft)
  expect(screen.getByText(DegreeIds.Third)).toHaveStyle(expectedStylesVoidLeft)
  expect(screen.getByText(DegreeIds.Fourth)).toHaveStyle(expectedStylesNonVoidLeft)
  expect(screen.getAllByText('/')[1]).toHaveStyle(expectedStylesUndefined)
})
