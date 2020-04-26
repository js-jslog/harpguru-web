import React from 'react'
import { render } from '@testing-library/react'

import { getTheme } from '../../index'

import { HoleNumber } from './index'

const theme = getTheme()

test('HoleNumber renders a dom element with the expected value included', () => {
  const { getByText } = render(<HoleNumber xCoord={0} theme={theme} />)
  expect(getByText('1')).toBeInTheDocument()
})
