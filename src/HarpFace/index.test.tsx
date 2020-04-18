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
  const degreeMatrix: DegreeMatrix = [[{id: DegreeIds.Root}, {id: DegreeIds.Second}]]
  const expectedStylesLeftMost = `
    border-color: black;
    border: 0px;
    border-left: 0px;
    font-size: 30px;
    text-align: centre;
  `
  const expectedStylesRightMost = `
    border-color: black;
    border: 0px;
    border-left: 1px;
    font-size: 30px;
    text-align: centre;
  `
  render(<HarpFace degreeMatrix={ degreeMatrix }/>)
  expect(screen.getByText(DegreeIds.Root)).toHaveStyle(expectedStylesLeftMost)
  expect(screen.getByText(DegreeIds.Second)).toHaveStyle(expectedStylesRightMost)
})
