import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, ApparatusIds, getPozitionIds, PozitionIds, getPitchIds, PitchIds, getHarpStrata } from 'harpstrata'
import type { HarpStrata, HarpStrataProps, ActiveIds, DegreeIds } from 'harpstrata'

import { toggleActiveDegreeIds } from '../../toggleActiveIds'
import { HarpFace, DisplayModes, generateHarpFaceStyles, getActiveColorSchemeIds, getTheme } from '../../../HarpFace'
import type { HarpFaceProps, ThemePrimer } from '../../../HarpFace'
import { ControlPanel } from '../../../ControlPanel'
import type { ControlPanelProps } from '../../../ControlPanel'


const [ apparatusId ] = getApparatusIds()
const [ pozitionId ] = getPozitionIds()
const [ pitchId ] = getPitchIds()
const harpStrataProps: HarpStrataProps = {
  apparatusId, pozitionId, keyPitchId: pitchId, activeIds: []
}

const themePrimer: ThemePrimer = {
  seedSize: 0.8,
  colorSchemeId: getActiveColorSchemeIds()[0],
}

const initialHarpStrata: HarpStrata = getHarpStrata(harpStrataProps)


export function HarpGuru(): ReactElement {
  const [ activeHarpStrata, setHarpStrata ] = useState(initialHarpStrata)
  const [ activePozitionId, setActivePozitionId ] = useState(pozitionId)
  const [ activePitchId, setActivePitchId ] = useState(pitchId)
  const [ activeDisplayMode, setDisplayMode ] = useState(DisplayModes.Degree)

  const getBaseHarpStrataProps = (): HarpStrataProps => {
    const { apparatus: { id: apparatusId }} = activeHarpStrata
    const pozitionId = activePozitionId
    const keyPitchId = activePitchId
    const { isActiveComplex: { activeDegreeIds: activeIds }} = activeHarpStrata

    return { apparatusId, pozitionId, keyPitchId, activeIds }
  }

  const setActiveIds = (activeIds: ActiveIds): void => {
    const harpStrataProps: HarpStrataProps = { ...getBaseHarpStrataProps(), activeIds }
    setHarpStrata(getHarpStrata(harpStrataProps))
  }
  const setApparatusId = (apparatusId: ApparatusIds): void => {
    const harpStrataProps: HarpStrataProps = { ...getBaseHarpStrataProps(), apparatusId }
    setHarpStrata(getHarpStrata(harpStrataProps))
  }
  const setPozitionId = (pozitionId: PozitionIds): void => {
    const harpStrataProps: HarpStrataProps = { ...getBaseHarpStrataProps(), pozitionId }
    setActivePozitionId(pozitionId)
    setHarpStrata(getHarpStrata(harpStrataProps))
  }
  const setPitchId = (pitchId: PitchIds): void => {
    const harpStrataProps: HarpStrataProps = { ...getBaseHarpStrataProps(), keyPitchId: pitchId }
    setActivePitchId(pitchId)
    setHarpStrata(getHarpStrata(harpStrataProps))
  }

  const harpStrata = activeHarpStrata
  const displayMode = activeDisplayMode
  const styles = generateHarpFaceStyles(getTheme(themePrimer))
  const toggleActiveDegreeId = (degreeId: DegreeIds): void => {
    const { isActiveComplex: { activeDegreeIds }} = activeHarpStrata
    const newActiveDegreeIds = toggleActiveDegreeIds(degreeId, activeDegreeIds)
    setActiveIds(newActiveDegreeIds)
  }

  const controlPanelProps: ControlPanelProps = { setApparatusId, setPozitionId, setPitchId, setDisplayMode }
  const harpFaceProps: HarpFaceProps = { harpStrata, displayMode, styles, toggleActiveDegreeId }
  return (
    <div>
      <ControlPanel {...controlPanelProps} />
      <HarpFace {...harpFaceProps} />
    </div>
  )
}
