import React from 'react'
import { PozitionIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react'

import type { PozitionButtonProps } from '../types'

import { PozitionButton } from './index'

test('PozitionButton renders a component with the parameter label on it', () => {
  const { First: id } = PozitionIds
  const label = 'First'
  const setPozitionId = jest.fn()
  const pozitionButtonProps: PozitionButtonProps = { id, label, setPozitionId }
  const { getByText } = render(<PozitionButton {...pozitionButtonProps} />)
  expect(getByText(label)).toBeInTheDocument()
})

test('PozitionButton renders a component which calls a paramaterised function when clicked', () => {
  const { First: id } = PozitionIds
  const label = 'First'
  const setPozitionId = jest.fn()
  const pozitionButtonProps: PozitionButtonProps = { id, label, setPozitionId }
  const { getByText } = render(<PozitionButton {...pozitionButtonProps} />)
  fireEvent.click(getByText(label))
  expect(setPozitionId.mock.calls.length).toBe(1)
})
