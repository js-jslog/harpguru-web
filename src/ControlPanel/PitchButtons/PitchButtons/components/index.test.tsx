import React from 'react'
import { PitchIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react'

import type { PitchButtonsProps } from '../types'

import { PitchButtons } from './index'

test('PitchButtons renders a component with a \'Pitch\' title', () => {
  const setPitchId = jest.fn()
  const pitchCButtonsProps: PitchButtonsProps = { setPitchId }

  const { getByText } = render(<PitchButtons {...pitchCButtonsProps } />)

  expect(getByText('Harp Key Pitch')).toBeInTheDocument()
})

test('PitchButtons renders an C pitch button which calls the passed function parameter when clicked', () => {
  const setPitchId = jest.fn()
  const pitchCButtonsProps: PitchButtonsProps = { setPitchId }

  const { getByText } = render(<PitchButtons {...pitchCButtonsProps } />)

  expect(getByText(PitchIds.C)).toBeInTheDocument()
  fireEvent.click(getByText(PitchIds.C))
  expect(setPitchId.mock.calls.length).toBe(1)
})
