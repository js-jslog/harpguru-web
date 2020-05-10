import React from 'react'
import { render } from '@testing-library/react'

import { ControlPanel } from './index'

test('ControlPanel renders a dom element with a \'Harp Position\' label', () => {
  const { getByText } = render(<ControlPanel />)
  expect(getByText('Harp Position')).toBeInTheDocument()
})
