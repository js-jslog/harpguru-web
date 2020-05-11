import React from 'react'
import { PozitionIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react'

import type { ControlPanelProps } from '../types'

import { ControlPanel } from './index'


test('ControlPanel has a first Pozition control which calls it\'s parameterised function when clicked', () => {
  const setPozitionId = jest.fn()
  const setDisplayMode = jest.fn()
  const controlPanelProps: ControlPanelProps = { setPozitionId, setDisplayMode }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText(PozitionIds.First)).toBeInTheDocument()
  fireEvent.click(getByText(PozitionIds.First))
  expect(setPozitionId.mock.calls.length).toBe(1)
})

test('ControlPanel has a DisplayModeToggler control which calls it\'s parameterised function when clicked', () => {
  const setPozitionId = jest.fn()
  const setDisplayMode = jest.fn()
  const controlPanelProps: ControlPanelProps = { setPozitionId, setDisplayMode }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText('Degree')).toBeInTheDocument()
  fireEvent.click(getByText('Degree'))
  expect(setDisplayMode.mock.calls.length).toBe(1)
})
