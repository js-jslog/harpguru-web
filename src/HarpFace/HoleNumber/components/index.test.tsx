import React from 'react'
import { render } from '@testing-library/react'

import { generateHoleNumberStyle } from '../index'
import { getTheme } from '../../index'

import { HoleNumber } from './index'

const theme = getTheme()
const styles = generateHoleNumberStyle()

test('HoleNumber renders a dom element with the expected value included', () => {
  const { getByText } = render(<HoleNumber xCoord={0} theme={theme} styles={styles} />)
  expect(getByText('1')).toBeInTheDocument()
})
