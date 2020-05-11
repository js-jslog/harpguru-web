import React from 'react'
import { render } from '@testing-library/react'

import type { ControlPanelProps } from '../types'

import { ControlPanel } from './index'


test('ControlPanel has a Pozitions control which calls it\'s parameterised function when clicked', () => {
  const setPozitionId = jest.fn()
  const controlPanelProps: ControlPanelProps = { setPozitionId }
  const { getByText } = render(<ControlPanel {...controlPanelProps} />)

  expect(getByText('Harp Position')).toBeInTheDocument()
})
