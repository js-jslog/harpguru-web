import React from 'react'
import { ApparatusIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react'

import type { ApparatusButtonProps } from '../types'

import { ApparatusButton } from './index'

test('ApparatusButton renders a component with the id used as the label', () => {
  const { MajorDiatonic: id } = ApparatusIds
  const setApparatusId = jest.fn()
  const apparatusButtonProps: ApparatusButtonProps = { id, setApparatusId }
  const { getByText } = render(<ApparatusButton {...apparatusButtonProps} />)
  expect(getByText(id)).toBeInTheDocument()
})

test('ApparatusButton renders a component which calls a paramaterised function when clicked', () => {
  const { MajorDiatonic: id } = ApparatusIds
  const setApparatusId = jest.fn()
  const apparatusButtonProps: ApparatusButtonProps = { id, setApparatusId }
  const { getByText } = render(<ApparatusButton {...apparatusButtonProps} />)
  fireEvent.click(getByText(id))
  expect(setApparatusId.mock.calls.length).toBe(1)
})
