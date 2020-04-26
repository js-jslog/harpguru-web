import React from 'react'
import { render } from '@testing-library/react'

import { getTheme } from '../HarpFace'

import { HarpUI } from './index'

const theme = getTheme()

test('HarpUI renders a HarpFace', () => {
  const { container } = render(<HarpUI theme={theme} />)
  expect(container.firstChild).toBeInTheDocument()
})
