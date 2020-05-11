import React from 'react'
import { PozitionIds, ApparatusIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react'

import type { ControlPanelProps } from '../types'

import { ControlPanel } from './index'


test('ControlPanel has a first Pozition control which calls it\'s parameterised function when clicked', () => {
  const setApparatusId = jest.fn()
  const setPozitionId = jest.fn()
  const setDisplayMode = jest.fn()
  const controlPanelProps: ControlPanelProps = { setApparatusId, setPozitionId, setDisplayMode }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText(PozitionIds.First)).toBeInTheDocument()
  fireEvent.click(getByText(PozitionIds.First))
  expect(setPozitionId.mock.calls.length).toBe(1)
})

test('ControlPanel has a Major Diatonic Apparatus control which calls it\'s parameterised function when clicked', () => {
  const setApparatusId = jest.fn()
  const setPozitionId = jest.fn()
  const setDisplayMode = jest.fn()
  const controlPanelProps: ControlPanelProps = { setApparatusId, setPozitionId, setDisplayMode }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText(ApparatusIds.MajorDiatonic)).toBeInTheDocument()
  fireEvent.click(getByText(ApparatusIds.MajorDiatonic))
  expect(setApparatusId.mock.calls.length).toBe(1)
})

test('ControlPanel has a DisplayModeToggler control which calls it\'s parameterised function when clicked', () => {
  const setApparatusId = jest.fn()
  const setPozitionId = jest.fn()
  const setDisplayMode = jest.fn()
  const controlPanelProps: ControlPanelProps = { setApparatusId, setPozitionId, setDisplayMode }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText('Degree')).toBeInTheDocument()
  fireEvent.click(getByText('Degree'))
  expect(setDisplayMode.mock.calls.length).toBe(1)
})
