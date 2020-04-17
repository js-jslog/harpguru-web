import React from 'react'
import type { Degree } from 'harpstrata'
import { DegreeIds } from 'harpstrata'
import { render, screen } from '@testing-library/react'

import { HoleInteraction } from './index'

test('HoleInteraction renders a dom element with the expected value included', () => {
  const flat3: Degree = {
    id: DegreeIds.Flat3,
  }
  render(<HoleInteraction degree={ flat3 }/>)
  expect(screen.getByText(DegreeIds.Flat3)).toBeInTheDocument()
})
