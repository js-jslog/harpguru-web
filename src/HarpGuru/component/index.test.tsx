import React from 'react'
import { ApparatusIds, DegreeIds, PozitionIds, PitchIds } from 'harpstrata'
import { render, screen, fireEvent, getAllByText, getByText } from '@testing-library/react'

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

test('The HarpFace presents shifting Pitches when the relevant Key Pitches are selected', () => {
  render(<HarpGuru />)
  const controlPanel = screen.getByText('Control Panel')
  const harpFace = screen.getByText('Harp Face')

  fireEvent.click(getByText(controlPanel, PresentationModes.Pitch))

  const [ cHole ] = getAllByText(harpFace, PitchIds.C)
  expect(cHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PitchIds.Db))

  const DbHole = getByText(cHole, PitchIds.Db)
  expect(DbHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PitchIds.C))


  const cHoleAgain = getByText(DbHole, PitchIds.C)
  expect(cHoleAgain).toBeInTheDocument()
})

test('The HarpFace presents shifting Pitches when the relevant Apparatus are selected', () => {
  render(<HarpGuru />)
  const controlPanel = screen.getByText('Control Panel')
  const harpFace = screen.getByText('Harp Face')

  fireEvent.click(getByText(controlPanel, PresentationModes.Pitch))

  const [ fHole ] = getAllByText(harpFace, PitchIds.F)
  expect(fHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, ApparatusIds.CountryTuned))

  const GbHole = getByText(fHole, PitchIds.Gb)
  expect(GbHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, ApparatusIds.MajorDiatonic))

  const fHoleAgain = getByText(GbHole, PitchIds.F)
  expect(fHoleAgain).toBeInTheDocument()
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

test('The Pozition state of the HarpFace persists even after the Pitch has been shifted', () => {
  render(<HarpGuru />)
  const controlPanel = screen.getByText('Control Panel')
  const harpFace = screen.getByText('Harp Face')

  fireEvent.click(getByText(controlPanel, PresentationModes.Degree))

  const [ rootHole ] = getAllByText(harpFace, DegreeIds.Root)
  expect(rootHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PozitionIds.Second))

  const fourthHole = getByText(rootHole, DegreeIds.Fourth)
  expect(fourthHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PitchIds.C))
  fireEvent.click(getByText(controlPanel, PitchIds.Db))

  const stillFourthHole = getByText(rootHole, DegreeIds.Fourth)
  expect(stillFourthHole).toBeInTheDocument()
})
