import React from 'react'
import { PitchIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react'

import type { PitchButtonProps } from '../types'

import { PitchButton } from './index'

test('PitchButton renders a component with the id used as the label', () => {
  const { A: id } = PitchIds
  const setPitchId = jest.fn()
  const pozitionButtonProps: PitchButtonProps = { id, setPitchId }
  const { getByText } = render(<PitchButton {...pozitionButtonProps} />)
  expect(getByText(id)).toBeInTheDocument()
})

test('PitchButton renders a component which calls a paramaterised function when clicked', () => {
  const { A: id } = PitchIds
  const setPitchId = jest.fn()
  const pozitionButtonProps: PitchButtonProps = { id, setPitchId }
  const { getByText } = render(<PitchButton {...pozitionButtonProps} />)
  fireEvent.click(getByText(id))
  expect(setPitchId.mock.calls.length).toBe(1)
})
