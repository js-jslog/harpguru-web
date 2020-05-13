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

  fireEvent.click(getByText(controlPanel, ApparatusIds.MajorDiatonic))
  fireEvent.click(getByText(controlPanel, PozitionIds.First))
  fireEvent.click(getByText(controlPanel, PitchIds.C))
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

  const [ holeC ] = getAllByText(harpFace, PitchIds.C)
  expect(holeC).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PitchIds.Db))

  const holeDb = getByText(holeC, PitchIds.Db)
  expect(holeDb).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PitchIds.C))


  const holeCAgain = getByText(holeDb, PitchIds.C)
  expect(holeCAgain).toBeInTheDocument()
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
  const [ hole1st ] = getAllByText(harpFace, DegreeIds.Root)

  fireEvent.click(getByText(controlPanel, PozitionIds.Second))
  const hole4th = getByText(hole1st, DegreeIds.Fourth)
  expect(hole4th).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PozitionIds.First))
  const hole1stAgain = getByText(hole4th, DegreeIds.Root)
  expect(hole1stAgain).toBeInTheDocument()
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

  const holeGbStill = getByText(fHole, PitchIds.Gb)
  expect(holeGbStill).toBeInTheDocument()
})

test('The Pozition state of the HarpFace persists even after the Pitch has been shifted', () => {
  render(<HarpGuru />)
  const controlPanel = getControlPanel(screen)
  const harpFace = getHarpFace(screen)

  fireEvent.click(getByText(controlPanel, ApparatusIds.MajorDiatonic))
  fireEvent.click(getByText(controlPanel, PozitionIds.First))
  fireEvent.click(getByText(controlPanel, PitchIds.C))
  fireEvent.click(getByText(controlPanel, DisplayModes.Degree))

  const [ hole1st ] = getAllByText(harpFace, DegreeIds.Root)
  expect(hole1st).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PozitionIds.Second))

  const hole4th = getByText(hole1st, DegreeIds.Fourth)
  expect(hole4th).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PitchIds.Db))

  const hole4thStill = getByText(hole1st, DegreeIds.Fourth)
  expect(hole4thStill).toBeInTheDocument()
})

test('The Pitch state of the HarpFace persists even after the Apparatus has been shifted', () => {
  render(<HarpGuru />)
  const controlPanel = getControlPanel(screen)
  const harpFace = getHarpFace(screen)

  fireEvent.click(getByText(controlPanel, ApparatusIds.MajorDiatonic))
  fireEvent.click(getByText(controlPanel, PozitionIds.First))
  fireEvent.click(getByText(controlPanel, PitchIds.C))
  fireEvent.click(getByText(controlPanel, DisplayModes.Pitch))

  const [ holeC ] = getAllByText(harpFace, PitchIds.C)
  expect(holeC).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, PitchIds.Db))

  const holeDb = getByText(holeC, PitchIds.Db)
  expect(holeDb).toBeInTheDocument()

  fireEvent.click(getByText(controlPanel, ApparatusIds.CountryTuned))

  const holeDbStill = getByText(holeDb, PitchIds.Db)
  expect(holeDbStill).toBeInTheDocument()
})
