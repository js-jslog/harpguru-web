import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getHarpStrata } from 'harpstrata'
import type { PozitionIds, ApparatusIds } from 'harpstrata'

import type { Theme } from '../index'
import { HarpFace } from '../HarpFace'

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
  const harpstrata = getHarpStrata(activeHarpId, activePozitionId)
  const [ activeHarpStrata, setHarpStrata ] = useState(harpstrata)

  const selectHarpId = (harpId: ApparatusIds): void => {
    setActiveHarpId(harpId)
    setHarpStrata(getHarpStrata(harpId, activePozitionId))
  }
  const selectPozitionId = (pozitionId: PozitionIds): void => {
    setActivePozitionId(pozitionId)
    setHarpStrata(getHarpStrata(activeHarpId, pozitionId))
  }
  const { theme } = props
  return (
    <div>
      <label htmlFor='apparatus'>Apparatus: </label>
      <span id='apparatus'>{activeHarpId}</span>
      <label htmlFor='pozition'>Position: </label>
      <span id='pozition'>{activePozitionId}</span>
      <HarpFace harpstrata={activeHarpStrata} theme={theme} />
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
