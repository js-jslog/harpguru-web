import React from 'react'
import { render } from '@testing-library/react'

import { HarpGuru } from './index'

test('HarpGuru renders a dom element with a \'Harp Position\' label for the control panel', () => {
  const { getByText } = render(<HarpGuru />)
  expect(getByText('Harp Position')).toBeInTheDocument()
})

test('HarpGuru renders a dom element with a HarpFace with a b7 hole in it', () => {
  const { getAllByText } = render(<HarpGuru />)
  expect(getAllByText('b7')[0]).toBeInTheDocument()
})

test('HarpGuru renders a dom element with a DisplayModeToggler in it', () => {
  const { getByText } = render(<HarpGuru />)
  expect(getByText('Degree')).toBeInTheDocument()
  expect(getByText('Pitch')).toBeInTheDocument()
})
