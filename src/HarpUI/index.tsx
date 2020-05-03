import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata, InteractionIds } from 'harpstrata'
import type { PozitionIds, ApparatusIds, PitchIds } from 'harpstrata'

import type { ThemePrimer } from '../HarpFace'
import { HarpFace, PresentationModes, generateHarpFaceStyles, getActiveColorSchemeIds, getTheme } from '../HarpFace'

export function HarpUI(): ReactElement {
  const harpIds = getApparatusIds()
  const availablePozitionIds = getPozitionIds()
  const availablePitchIds = getPitchIds()
  const [ aHarpId ] = harpIds
  const [ aPozitionId ] = availablePozitionIds
  const [ aHarpKeyPitchId ] = availablePitchIds
  const [ activeHarpId, setActiveHarpId ] = useState(aHarpId)
  const [ activePozitionId, setActivePozitionId ] = useState(aPozitionId)
  const [ activeHarpKeyPitchId, setActiveHarpKeyPitchId ] = useState(aHarpKeyPitchId)
  const harpStrata = getHarpStrata(activeHarpId, activePozitionId, activeHarpKeyPitchId)
  const [ activeHarpStrata, setHarpStrata ] = useState(harpStrata)
  const [ activePresentationMode, setActivePresentationMode ] = useState(PresentationModes.Degree)

  const selectHarpId = (harpId: ApparatusIds): void => {
    setActiveHarpId(harpId)
    setHarpStrata(getHarpStrata(harpId, activePozitionId, activeHarpKeyPitchId))
  }
  const selectPozitionId = (pozitionId: PozitionIds): void => {
    setActivePozitionId(pozitionId)
    setActivePresentationMode(PresentationModes.Degree)
    setHarpStrata(getHarpStrata(activeHarpId, pozitionId, activeHarpKeyPitchId))
  }
  const selectHarpKeyPitchId = (harpKeyPitch: PitchIds): void => {
    setActiveHarpKeyPitchId(harpKeyPitch)
    setActivePresentationMode(PresentationModes.Pitch)
    setHarpStrata(getHarpStrata(activeHarpId, activePozitionId, harpKeyPitch))
  }
  const inactiveInteractions: InteractionIds[] = [
    InteractionIds.OverBlow1, InteractionIds.OverDraw1
  ]
  const themePrimer: ThemePrimer = {
    seedSize: 0.8,
    colorSchemeId: getActiveColorSchemeIds()[0],
  }
  const styles = generateHarpFaceStyles(getTheme(themePrimer))
  return (
    <div>
      <label htmlFor='apparatus'>Apparatus: </label>
      <span id='apparatus'>{activeHarpId}</span>
      <label htmlFor='pozition'>Position: </label>
      <span id='pozition'>{activePozitionId}</span>
      <HarpFace harpStrata={activeHarpStrata} inactiveInteractions={inactiveInteractions} presentationMode={activePresentationMode} styles={styles} />
      <button onClick={(): void => selectPozitionId(availablePozitionIds[0])}>
        { availablePozitionIds[0] }
      </button>
      <button onClick={(): void => selectPozitionId(availablePozitionIds[1])}>
        { availablePozitionIds[1] }
      </button>
      <button onClick={(): void => selectHarpId(harpIds[0])}>
        { harpIds[0] }
      </button>
      <button onClick={(): void => selectHarpId(harpIds[1])}>
        { harpIds[1] }
      </button>
      <button onClick={(): void => selectHarpId(harpIds[2])}>
        { harpIds[2] }
      </button>
      <button onClick={(): void => selectHarpKeyPitchId(availablePitchIds[0])}>
        { availablePitchIds[0] }
      </button>
      <button onClick={(): void => selectHarpKeyPitchId(availablePitchIds[1])}>
        { availablePitchIds[1] }
      </button>
    </div>
  )
}
