import React from 'react'
import { render } from '@testing-library/react'

import { HarpUI } from './index'

test('HarpUI renders a HarpFace', () => {
  const { container } = render(<HarpUI />)
  expect(container.firstChild).toBeInTheDocument()
})
