import React from 'react'
import { render } from '@testing-library/react'

import { PozitionButtons } from './index'

test('PozitionButtons renders a dom element with a \'Harp Position\' label', () => {
  const { getByText } = render(<PozitionButtons />)
  expect(getByText('Harp Position')).toBeInTheDocument()
})
