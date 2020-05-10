import React from 'react'
import { render } from '@testing-library/react'

import { HarpGuru } from './index'

test('HarpGuru renders a dom element with a \'Harp Position\' label for the control panel', () => {
  const { getByText } = render(<HarpGuru />)
  expect(getByText('Harp Position')).toBeInTheDocument()
})
