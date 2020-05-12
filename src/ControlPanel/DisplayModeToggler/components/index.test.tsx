import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { DisplayModeTogglerProps } from '../types'
import { PresentationModes } from '../../../HarpFace'

import { DisplayModeToggler } from './index'

test('DisplayModeToggler renders a component with both \'Display Mode\' title', () => {
  const setDisplayMode = jest.fn()
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const { getByText } = render(<DisplayModeToggler {...displayModeTogglerProps} />)
  expect(getByText('Display Mode')).toBeInTheDocument()
})

test('DisplayModeToggler renders a component with both \'Degree\' and \'Pitch\' buttons', () => {
  const setDisplayMode = jest.fn()
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const { getByText } = render(<DisplayModeToggler {...displayModeTogglerProps} />)
  expect(getByText(PresentationModes.Degree)).toBeInTheDocument()
  expect(getByText(PresentationModes.Pitch)).toBeInTheDocument()
})

test('DisplayModeToggler calls a paramaterised function when \'Degree\' is clicked', () => {
  const setDisplayMode = jest.fn()
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const { getByText } = render(<DisplayModeToggler {...displayModeTogglerProps} />)
  fireEvent.click(getByText(PresentationModes.Degree))
  expect(setDisplayMode.mock.calls.length).toBe(1)
})
