import React from 'react'
import { render, screen } from '@testing-library/react'

import { HoleInteraction } from './index'

test('HoleInteraction renders a dom element', () => {
  render(<HoleInteraction />)
  expect(screen.getByText('hole interaction')).toBeInTheDocument()
})
