import React from 'react'
import { PitchIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react'

import type { PitchButtonsProps } from '../types'

import { PitchButtons } from './index'

test('PitchButtons renders an A pitch button which calls the passed function parameter when clicked', () => {
  const setPitchId = jest.fn()
  const pitchAButtonsProps: PitchButtonsProps = { setPitchId }

  const { getByText } = render(<PitchButtons {...pitchAButtonsProps } />)

  expect(getByText(PitchIds.A)).toBeInTheDocument()
  fireEvent.click(getByText(PitchIds.A))
  expect(setPitchId.mock.calls.length).toBe(1)
})
