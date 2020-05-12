import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, ApparatusIds, getPozitionIds, PozitionIds, getPitchIds, PitchIds, getHarpStrata } from 'harpstrata'
import type { HarpStrata, InteractionIds } from 'harpstrata'

import { HarpFace, PresentationModes, generateHarpFaceStyles, getActiveColorSchemeIds, getTheme } from '../../HarpFace'
import type { HarpFaceProps, ThemePrimer } from '../../HarpFace'
import { ControlPanel } from '../../ControlPanel'
import type { ControlPanelProps } from '../../ControlPanel'


const [ apparatusId ] = getApparatusIds()
const [ pozitionId ] = getPozitionIds()
const [ pitchId ] = getPitchIds()

const themePrimer: ThemePrimer = {
  seedSize: 0.8,
  colorSchemeId: getActiveColorSchemeIds()[0],
}

const initialHarpStrata: HarpStrata = getHarpStrata(apparatusId, pozitionId, pitchId)
const inactiveInteractions: InteractionIds[] = []
const styles = generateHarpFaceStyles(getTheme(themePrimer))


export function HarpGuru(): ReactElement {
  const [ activeHarpStrata, setHarpStrata ] = useState(initialHarpStrata)
  const [ activePozitionId, setActivePozitionId ] = useState(pozitionId)
  const [ activePitchId, setActivePitchId ] = useState(pitchId)
  const [ activeDisplayMode, setDisplayMode ] = useState(PresentationModes.Degree)

  const setApparatusId = (apparatusId: ApparatusIds): void => {
    setHarpStrata(getHarpStrata(apparatusId, activePozitionId, activePitchId))
  }
  const setPozitionId = (pozitionId: PozitionIds): void => {
    setActivePozitionId(pozitionId)
    setHarpStrata(getHarpStrata(apparatusId, pozitionId, activePitchId))
  }
  const setPitchId = (pitchId: PitchIds): void => {
    setActivePitchId(pitchId)
    setHarpStrata(getHarpStrata(apparatusId, activePozitionId, pitchId))
  }

  const harpStrata = activeHarpStrata
  const presentationMode = activeDisplayMode

  const controlPanelProps: ControlPanelProps = { setApparatusId, setPozitionId, setPitchId, setDisplayMode }
  const harpFaceProps: HarpFaceProps = { harpStrata, inactiveInteractions, presentationMode, styles }
  return (
    <div>
      <ControlPanel {...controlPanelProps} />
      <HarpFace {...harpFaceProps} />
    </div>
  )
}
