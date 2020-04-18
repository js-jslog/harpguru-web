import React from 'react'
import { render } from '@testing-library/react'

import { Square } from './Square'

test('renders learn react link', () => {
  const { getByText } = render(<Square value='this is a square'/>)
  const squareElement = getByText(/this is a square/i)
  expect(squareElement).toBeInTheDocument()
})
