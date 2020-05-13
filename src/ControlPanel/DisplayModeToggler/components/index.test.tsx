import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { DisplayModeTogglerProps } from '../types'
import { DisplayModes } from '../../../HarpFace'

import { DisplayModeToggler } from './index'

test('DisplayModeToggler renders a component with \'Display Mode\' title', () => {
  const setDisplayMode = jest.fn()
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const { getByText } = render(<DisplayModeToggler {...displayModeTogglerProps} />)
  expect(getByText('Display Mode')).toBeInTheDocument()
})

test('DisplayModeToggler renders a component with both \'Degree\' and \'Pitch\' buttons', () => {
  const setDisplayMode = jest.fn()
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const { getByText } = render(<DisplayModeToggler {...displayModeTogglerProps} />)
  expect(getByText(DisplayModes.Degree)).toBeInTheDocument()
  expect(getByText(DisplayModes.Pitch)).toBeInTheDocument()
})

test('DisplayModeToggler calls a paramaterised function when \'Degree\' is clicked', () => {
  const setDisplayMode = jest.fn()
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const { getByText } = render(<DisplayModeToggler {...displayModeTogglerProps} />)
  fireEvent.click(getByText(DisplayModes.Degree))
  expect(setDisplayMode.mock.calls.length).toBe(1)
})
