import React from 'react'
import { render } from '@testing-library/react'

import { exampleHarpFaceProps } from '../../testResources'

import { HarpFace } from './index'

test('HarpFace renders a dom element with the required grid styles when a two column strata matrices are provided', () => {
  const expectedStyle = `
    display: grid;
    grid-template-columns: auto auto auto auto auto auto auto auto auto auto;
  `
  const { container } = render(<HarpFace {...exampleHarpFaceProps} />)
  expect(container.firstChild).toHaveStyle(expectedStyle)
})
