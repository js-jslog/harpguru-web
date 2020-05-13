import React from 'react'
import { ApparatusIds, DegreeIds, PozitionIds, PitchIds } from 'harpstrata'
import { render, screen, fireEvent, getAllByText, getByText, queryByText } from '@testing-library/react'
import type { Screen } from '@testing-library/react'

import { DisplayModes } from '../../HarpFace'

import { HarpGuru } from './index'


const getControlPanel = (screen: Screen): HTMLElement => {
  return screen.getByRole('menubar')
}

const getHarpFace = (screen: Screen): HTMLElement => {
  return screen.getByRole('application')
}

test('The HarpFace presents Degrees and Pitches when the relevant DisplayModeToggle option is selected', () => {
  render(<HarpGuru />)
  const controlPanel = getControlPanel(screen)
  const harpFace = getHarpFace(screen)

  fireEvent.click(getByText(controlPanel, DisplayModes.Degree))

  const [ hole7b ] = getAllByText(harpFace, DegreeIds.Flat7)
  const holeAbAbsent = queryByText(harpFace, PitchIds.Ab)

  expect(hole7b).toBeInTheDocument()
  expect(holeAbAbsent).toBeNull()

  fireEvent.click(getByText(controlPanel, DisplayModes.Pitch))

  const [ holeAb ] = getAllByText(harpFace, PitchIds.Ab)
  const hole7bAbsent = queryByText(harpFace, DegreeIds.Flat7)

  expect(holeAb).toBeInTheDocument()
  expect(hole7bAbsent).toBeNull()

  fireEvent.click(getByText(controlPanel, DisplayModes.Degree))

  const [ hole7bAgain ] = getAllByText(harpFace, DegreeIds.Flat7)
  const holeAbAbsentAgain = queryByText(harpFace, PitchIds.Ab)

  expect(hole7bAgain).toBeInTheDocument()
  expect(holeAbAbsentAgain).toBeNull()
})

test('The HarpFace presents shifting Pitches when the relevant Key Pitches are selected', () => {
  render(<HarpGuru />)
  const controlPanel = getControlPanel(screen)
  const harpFace = getHarpFace(screen)

  fireEvent.click(getByText(controlPanel, ApparatusIds.MajorDiatonic))
  fireEvent.click(getByText(controlPanel, PozitionIds.First))
  fireEvent.click(getByText(controlPanel, PitchIds.C))
  fireEvent.click(getByText(controlPanel, DisplayModes.Pitch))

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
  const controlPanel = getControlPanel(screen)
  const harpFace = getHarpFace(screen)

  fireEvent.click(getByText(controlPanel, ApparatusIds.MajorDiatonic))
  fireEvent.click(getByText(controlPanel, PozitionIds.First))
  fireEvent.click(getByText(controlPanel, PitchIds.C))
  fireEvent.click(getByText(controlPanel, DisplayModes.Pitch))

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
  const controlPanel = getControlPanel(screen)
  const harpFace = getHarpFace(screen)

  fireEvent.click(getByText(controlPanel, ApparatusIds.MajorDiatonic))
  fireEvent.click(getByText(controlPanel, PozitionIds.First))
  fireEvent.click(getByText(controlPanel, PitchIds.C))
  fireEvent.click(getByText(controlPanel, DisplayModes.Degree))

  fireEvent.click(screen.getByText(PozitionIds.First))
  const [ rootHole ] = getAllByText(harpFace, DegreeIds.Root)

  fireEvent.click(getByText(controlPanel, PozitionIds.Second))
  const fourthHole = getByText(rootHole, DegreeIds.Fourth)
  expect(fourthHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PozitionIds.First))
  const rootHoleAgain = getByText(fourthHole, DegreeIds.Root)
  expect(rootHoleAgain).toBeInTheDocument()
})

test('The Apparatus state of the HarpFace persists even after the Pitch has been shifted', () => {
  render(<HarpGuru />)
  const controlPanel = getControlPanel(screen)
  const harpFace = getHarpFace(screen)

  fireEvent.click(getByText(controlPanel, ApparatusIds.MajorDiatonic))
  fireEvent.click(getByText(controlPanel, PozitionIds.First))
  fireEvent.click(getByText(controlPanel, PitchIds.C))
  fireEvent.click(getByText(controlPanel, DisplayModes.Pitch))

  const [ fHole ] = getAllByText(harpFace, PitchIds.F)
  expect(fHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, ApparatusIds.CountryTuned))

  const GbHole = getByText(fHole, PitchIds.Gb)
  expect(GbHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PitchIds.Db))
  fireEvent.click(getByText(controlPanel, PitchIds.C))

  const stillGbHole = getByText(fHole, PitchIds.Gb)
  expect(stillGbHole).toBeInTheDocument()
})

test('The Pozition state of the HarpFace persists even after the Pitch has been shifted', () => {
  render(<HarpGuru />)
  const controlPanel = getControlPanel(screen)
  const harpFace = getHarpFace(screen)

  fireEvent.click(getByText(controlPanel, ApparatusIds.MajorDiatonic))
  fireEvent.click(getByText(controlPanel, PozitionIds.First))
  fireEvent.click(getByText(controlPanel, PitchIds.C))
  fireEvent.click(getByText(controlPanel, DisplayModes.Degree))

  const [ rootHole ] = getAllByText(harpFace, DegreeIds.Root)
  expect(rootHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PozitionIds.Second))

  const fourthHole = getByText(rootHole, DegreeIds.Fourth)
  expect(fourthHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PitchIds.Db))

  const stillFourthHole = getByText(rootHole, DegreeIds.Fourth)
  expect(stillFourthHole).toBeInTheDocument()
})

test('The Pitch state of the HarpFace persists even after the Apparatus has been shifted', () => {
  render(<HarpGuru />)
  const controlPanel = getControlPanel(screen)
  const harpFace = getHarpFace(screen)

  fireEvent.click(getByText(controlPanel, ApparatusIds.MajorDiatonic))
  fireEvent.click(getByText(controlPanel, PozitionIds.First))
  fireEvent.click(getByText(controlPanel, PitchIds.C))
  fireEvent.click(getByText(controlPanel, DisplayModes.Pitch))

  const [ cHole ] = getAllByText(harpFace, PitchIds.C)
  expect(cHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PitchIds.Db))

  const DbHole = getByText(cHole, PitchIds.Db)
  expect(DbHole).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, ApparatusIds.CountryTuned))

  const stillDbHole = getByText(DbHole, PitchIds.Db)
  expect(stillDbHole).toBeInTheDocument()
})
