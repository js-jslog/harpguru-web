import React from 'react'
import { render } from '@testing-library/react'

import type { PozitionButtonProps } from '../types'

import { PozitionButton } from './index'

test('PozitionButton renders a component with the parameter label on it', () => {
  const label = 'First'
  const pozitionButtonProps: PozitionButtonProps = { label }
  const { getByText } = render(<PozitionButton {...pozitionButtonProps} />)
  expect(getByText(label)).toBeInTheDocument()
})
