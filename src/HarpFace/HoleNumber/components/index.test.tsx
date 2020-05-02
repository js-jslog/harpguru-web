import React from 'react'
import { render } from '@testing-library/react'

import { generateHoleNumberStyles } from '../styles'
import { getTheme } from '../../Theme'

import { HoleNumber } from './index'

const styles = generateHoleNumberStyles(getTheme())

test('HoleNumber renders a dom element with the expected value included', () => {
  const { getByText } = render(<HoleNumber xCoord={0} styles={styles} />)
  expect(getByText('1')).toBeInTheDocument()
})
