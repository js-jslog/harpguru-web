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

test('HoleInteraction renders a dom element with an inline style element', () => {
  const flat3: Degree = {
    id: DegreeIds.Flat3,
  }
  const { container } = render(<HoleInteraction degree={ flat3 } />)
  expect(container.firstChild).toHaveStyle('border: 1px solid rgba(0, 0, 0, 0.8)')
  expect(container.firstChild).toHaveStyle('font-size: 30px')
  expect(container.firstChild).toHaveStyle('text-align: centre')
})
