import React from 'react'
import type { DegreeMatrix } from 'harpstrata'
import { DegreeIds } from 'harpstrata'
import { render, screen } from '@testing-library/react'

import { HarpFace } from './index'

test('HarpFace will render', () => {
  const degreeMatrix: DegreeMatrix = [[{
    id: DegreeIds.Root 
  }]]
  render(<HarpFace degreeMatrix={ degreeMatrix }/>)
  expect(screen.getByText(DegreeIds.Root)).toBeInTheDocument()
})
