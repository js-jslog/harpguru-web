import React from 'react'
import { PitchIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react'

import type { PitchButtonProps } from '../types'

import { PitchButton } from './index'

test('PitchButton renders a component with the id used as the label', () => {
  const { A: id } = PitchIds
  const setPitchId = jest.fn()
  const pitchButtonProps: PitchButtonProps = { id, setPitchId }
  const { getByText } = render(<PitchButton {...pitchButtonProps} />)
  expect(getByText(id)).toBeInTheDocument()
})

test('PitchButton renders a component which calls a paramaterised function when clicked, passing the id as the argument to that function call', () => {
  const { A: id } = PitchIds
  const setPitchId = jest.fn()
  const pitchButtonProps: PitchButtonProps = { id, setPitchId }
  const { getByText } = render(<PitchButton {...pitchButtonProps} />)
  fireEvent.click(getByText(id))
  expect(setPitchId.mock.calls.length).toBe(1)
  expect(setPitchId.mock.calls[0][0]).toBe(id)
})
