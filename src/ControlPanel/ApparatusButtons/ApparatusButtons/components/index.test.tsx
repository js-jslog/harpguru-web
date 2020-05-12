import React from 'react'
import { ApparatusIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react'

import type { ApparatusButtonsProps } from '../types'

import { ApparatusButtons } from './index'

test('ApparatusButtons renders a dom element with a \'Harp Apparatus\' label', () => {
  const setApparatusId = jest.fn()
  const pozitionButtonsProps: ApparatusButtonsProps = { setApparatusId }

  const { getByText } = render(<ApparatusButtons {...pozitionButtonsProps } />)
  expect(getByText('Harp Apparatus')).toBeInTheDocument()
})

test('ApparatusButtons renders a first position button which calls the passed function parameter when clicked', () => {
  const setApparatusId = jest.fn()
  const pozitionButtonsProps: ApparatusButtonsProps = { setApparatusId }

  const { getByText } = render(<ApparatusButtons {...pozitionButtonsProps } />)

  expect(getByText(ApparatusIds.MajorDiatonic)).toBeInTheDocument()
  fireEvent.click(getByText(ApparatusIds.MajorDiatonic))
  expect(setApparatusId.mock.calls.length).toBe(1)
})
