import React from 'react'
import { render, fireEvent } from '@testing-library/react'

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

test('The HarpFace presents Degrees and Pitches when the relevant DisplayModeToggle option is selected', () => {
  const { queryByText, getByText, getAllByText } = render(<HarpGuru />)
  fireEvent.click(getByText('Degree'))
  expect(getAllByText('b7')[0]).toBeInTheDocument()
  expect(queryByText('Ab')).toBeNull()
  fireEvent.click(getByText('Pitch'))
  expect(getAllByText('Ab')[0]).toBeInTheDocument()
  expect(queryByText('b7')).toBeNull()
  fireEvent.click(getByText('Degree'))
  expect(getAllByText('b7')[0]).toBeInTheDocument()
  expect(queryByText('Ab')).toBeNull()
})
