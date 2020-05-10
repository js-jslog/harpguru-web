import React from 'react'
import { render } from '@testing-library/react'

import { DisplayModeToggler } from './index'

test('DisplayModeToggler renders a component with both \'Degree\' and \'Pitch\' buttons', () => {
  const { getByText } = render(<DisplayModeToggler />)
  expect(getByText('Degree')).toBeInTheDocument()
  expect(getByText('Pitch')).toBeInTheDocument()
})
