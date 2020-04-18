import React from 'react'
import { render } from '@testing-library/react'

import { HarpFace } from './index'

test('HarpFace will render', () => {
  const { container } = render(<HarpFace />)
  expect(container).toBeInTheDocument()
})
