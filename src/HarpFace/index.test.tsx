import React from 'react'
import type { DegreeMatrix } from 'harpstrata'
import { DegreeIds } from 'harpstrata'
import { render, screen } from '@testing-library/react'

import { HarpFace } from './index'

test('HarpFace will render a single degree', () => {
  const degreeMatrix: DegreeMatrix = [[{
    id: DegreeIds.Root 
  }]]
  render(<HarpFace degreeMatrix={ degreeMatrix }/>)
  expect(screen.getByText(DegreeIds.Root)).toBeInTheDocument()
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
