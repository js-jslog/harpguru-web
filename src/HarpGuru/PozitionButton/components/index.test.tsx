import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import type { PozitionButtonProps } from '../types'

import { PozitionButton } from './index'

test('PozitionButton renders a component with the parameter label on it', () => {
  const label = 'First'
  const onClickFunction = jest.fn()
  const pozitionButtonProps: PozitionButtonProps = { label, onClickFunction }
  const { getByText } = render(<PozitionButton {...pozitionButtonProps} />)
  expect(getByText(label)).toBeInTheDocument()
})

test('PozitionButton renders a component which calls a paramaterised function when clicked', () => {
  const label = 'First'
  const onClickFunction = jest.fn()
  const pozitionButtonProps: PozitionButtonProps = { label, onClickFunction }
  const { getByText } = render(<PozitionButton {...pozitionButtonProps} />)
  fireEvent.click(getByText(label))
  expect(onClickFunction.mock.calls.length).toBe(1)
})
