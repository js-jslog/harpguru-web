import React from 'react'
import { PozitionIds, ApparatusIds, PitchIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react'

import type { ControlPanelProps } from '../types'
import { DisplayModes } from '../../../HarpFace'

import { ControlPanel } from './index'


test('ControlPanel has a first Pozition control which calls it\'s parameterised function with it\'s expected identity when clicked', () => {
  const setApparatusId = jest.fn()
  const setPozitionId = jest.fn()
  const setPitchId = jest.fn()
  const setDisplayMode = jest.fn()
  const controlPanelProps: ControlPanelProps = { setApparatusId, setPozitionId, setPitchId, setDisplayMode }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText(PozitionIds.First)).toBeInTheDocument()

  fireEvent.click(getByText(PozitionIds.First))

  expect(setPozitionId.mock.calls.length).toBe(1)
  expect(setPozitionId.mock.calls[0][0]).toBe(PozitionIds.First)
})

test('ControlPanel has a Major Diatonic Apparatus control which calls it\'s parameterised function with it\'s expected identity when clicked', () => {
  const setApparatusId = jest.fn()
  const setPozitionId = jest.fn()
  const setPitchId = jest.fn()
  const setDisplayMode = jest.fn()
  const controlPanelProps: ControlPanelProps = { setApparatusId, setPozitionId, setPitchId, setDisplayMode }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText(ApparatusIds.MajorDiatonic)).toBeInTheDocument()

  fireEvent.click(getByText(ApparatusIds.MajorDiatonic))

  expect(setApparatusId.mock.calls.length).toBe(1)
  expect(setApparatusId.mock.calls[0][0]).toBe(ApparatusIds.MajorDiatonic)
})

test('ControlPanel has an C Pitch control which calls it\'s parameterised function with it\'s expected identity when clicked', () => {
  const setApparatusId = jest.fn()
  const setPozitionId = jest.fn()
  const setPitchId = jest.fn()
  const setDisplayMode = jest.fn()
  const controlPanelProps: ControlPanelProps = { setApparatusId, setPozitionId, setPitchId, setDisplayMode }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText(PitchIds.C)).toBeInTheDocument()

  fireEvent.click(getByText(PitchIds.C))

  expect(setPitchId.mock.calls.length).toBe(1)
  expect(setPitchId.mock.calls[0][0]).toBe(PitchIds.C)
})

test('ControlPanel has a DisplayModeToggler control which calls it\'s parameterised function with it\'s expected identity when clicked', () => {
  const setApparatusId = jest.fn()
  const setPozitionId = jest.fn()
  const setPitchId = jest.fn()
  const setDisplayMode = jest.fn()
  const controlPanelProps: ControlPanelProps = { setApparatusId, setPozitionId, setPitchId, setDisplayMode }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText(DisplayModes.Degree)).toBeInTheDocument()

  fireEvent.click(getByText(DisplayModes.Degree))

  expect(setDisplayMode.mock.calls.length).toBe(1)
  expect(setDisplayMode.mock.calls[0][0]).toBe(DisplayModes.Degree)
})
