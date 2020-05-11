import React from 'react'
import { PozitionIds } from 'harpstrata'
import { render, screen, fireEvent, getByText } from '@testing-library/react'

import { PresentationModes } from '../../HarpFace'

import { HarpGuru } from './index'


test('HarpGuru renders a dom element with a HarpFace with a b7 hole in it', () => {
  const { getAllByText } = render(<HarpGuru />)
  expect(getAllByText('b7')[0]).toBeInTheDocument()
})

test('HarpGuru renders a dom element with a DisplayModeToggler in it', () => {
  const { getByText } = render(<HarpGuru />)
  expect(getByText(PresentationModes.Degree)).toBeInTheDocument()
  expect(getByText(PresentationModes.Pitch)).toBeInTheDocument()
})

test('The HarpFace presents Degrees and Pitches when the relevant DisplayModeToggle option is selected', () => {
  const { queryByText, getByText, getAllByText } = render(<HarpGuru />)
  fireEvent.click(getByText(PresentationModes.Degree))
  expect(getAllByText('b7')[0]).toBeInTheDocument()
  expect(queryByText('Ab')).toBeNull()
  fireEvent.click(getByText(PresentationModes.Pitch))
  expect(getAllByText('Ab')[0]).toBeInTheDocument()
  expect(queryByText('b7')).toBeNull()
  fireEvent.click(getByText(PresentationModes.Degree))
  expect(getAllByText('b7')[0]).toBeInTheDocument()
  expect(queryByText('Ab')).toBeNull()
})

test('The HarpFace presents shifting DegreeIds when the relevant Pozitions are selected', () => {
  render(<HarpGuru />)
  fireEvent.click(screen.getByText(PozitionIds.First))
  const [ rootHoleContainer ] = screen.getAllByText('1')
  fireEvent.click(screen.getByText(PozitionIds.Second))
  const changedHole = getByText(rootHoleContainer, '4')
  expect(changedHole).toBeInTheDocument()
  fireEvent.click(screen.getByText(PozitionIds.First))
  const changedBackHole = getByText(rootHoleContainer, '1')
  expect(changedBackHole).toBeInTheDocument()
})
