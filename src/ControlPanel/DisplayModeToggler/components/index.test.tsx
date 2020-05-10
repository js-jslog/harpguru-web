import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { DisplayModeTogglerProps } from '../types'

import { DisplayModeToggler } from './index'

test('DisplayModeToggler renders a component with both \'Degree\' and \'Pitch\' buttons', () => {
  const setDisplayMode = jest.fn()
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const { getByText } = render(<DisplayModeToggler {...displayModeTogglerProps} />)
  expect(getByText('Degree')).toBeInTheDocument()
  expect(getByText('Pitch')).toBeInTheDocument()
})

test('DisplayModeToggler calls a paramaterised function when \'Degree\' is clicked', () => {
  const setDisplayMode = jest.fn()
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const { getByText } = render(<DisplayModeToggler {...displayModeTogglerProps} />)
  fireEvent.click(getByText('Degree'))
  expect(setDisplayMode.mock.calls.length).toBe(1)
})
