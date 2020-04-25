import React from 'react'
import { render } from '@testing-library/react'

import { getTheme } from '../index'

import { HarpUI } from './index'

const theme = getTheme({seedSize: 1})

test('HarpUI renders a HarpFace', () => {
  const { container } = render(<HarpUI theme={theme} />)
  expect(container.firstChild).toBeInTheDocument()
})
