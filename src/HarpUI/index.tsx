import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getHarpStrata, InteractionIds } from 'harpstrata'
import type { PozitionIds, ApparatusIds } from 'harpstrata'

import type { Theme } from '../HarpFace'
import { HarpFace, generateHarpFaceStyles } from '../HarpFace'

type HarpUIProps = {
  readonly theme: Theme;
}

export function HarpUI(props: HarpUIProps): ReactElement {
  const harpIds = getApparatusIds()
  const availablePozitionIds = getPozitionIds()
  const [ aHarpId ] = harpIds
  const [ aPozitionId ] = availablePozitionIds
  const [ activeHarpId, setActiveHarpId ] = useState(aHarpId)
  const [ activePozitionId, setActivePozitionId ] = useState(aPozitionId)
  const harpStrata = getHarpStrata(activeHarpId, activePozitionId)
  const [ activeHarpStrata, setHarpStrata ] = useState(harpStrata)

  const selectHarpId = (harpId: ApparatusIds): void => {
    setActiveHarpId(harpId)
    setHarpStrata(getHarpStrata(harpId, activePozitionId))
  }
  const selectPozitionId = (pozitionId: PozitionIds): void => {
    setActivePozitionId(pozitionId)
    setHarpStrata(getHarpStrata(activeHarpId, pozitionId))
  }
  const inactiveInteractions: InteractionIds[] = [
    InteractionIds.OverBlow1, InteractionIds.OverDraw1
  ]
  const { theme } = props
  const styles = generateHarpFaceStyles()
  return (
    <div>
      <label htmlFor='apparatus'>Apparatus: </label>
      <span id='apparatus'>{activeHarpId}</span>
      <label htmlFor='pozition'>Position: </label>
      <span id='pozition'>{activePozitionId}</span>
      <HarpFace harpStrata={activeHarpStrata} inactiveInteractions={inactiveInteractions} theme={theme} styles={styles} />
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
    </div>
  )
}
