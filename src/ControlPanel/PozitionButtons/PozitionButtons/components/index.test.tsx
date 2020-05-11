import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import type { PozitionButtonsProps } from '../types'

import { PozitionButtons } from './index'

test('PozitionButtons renders a dom element with a \'Harp Position\' label', () => {
  const setPozitionId = jest.fn()
  const pozitionButtonsProps: PozitionButtonsProps = { setPozitionId }

  const { getByText } = render(<PozitionButtons {...pozitionButtonsProps } />)
  expect(getByText('Harp Position')).toBeInTheDocument()
})

test('PozitionButtons renders a first position button which calls the passed function parameter when clicked', () => {
  const setPozitionId = jest.fn()
  const pozitionButtonsProps: PozitionButtonsProps = { setPozitionId }

  const { getByText } = render(<PozitionButtons {...pozitionButtonsProps } />)

  expect(getByText('First')).toBeInTheDocument()
  fireEvent.click(getByText('First'))
  expect(setPozitionId.mock.calls.length).toBe(1)
})
