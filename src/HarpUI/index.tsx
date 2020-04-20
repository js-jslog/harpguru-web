import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getHarpStrata } from 'harpstrata'
import type { PozitionIds, ApparatusIds } from 'harpstrata'

import { HarpFace } from '../HarpFace'

export function HarpUI(): ReactElement {
  const harpIds = getApparatusIds()
  const availablePozitionIds = getPozitionIds()
  const [ aHarpId ] = harpIds
  const [ aPozitionId ] = availablePozitionIds
  const [ activeHarpId, setActiveHarpId ] = useState(aHarpId)
  const [ activePozitionId, setActivePozitionId ] = useState(aPozitionId)
  const { degreeMatrix } = getHarpStrata(activeHarpId, activePozitionId)
  const [ activeDegreeMatrix, setDegreeMatrix ] = useState(degreeMatrix)

  const selectHarpId = (harpId: ApparatusIds): void => {
    setActiveHarpId(harpId)
    setDegreeMatrix(getHarpStrata(harpId, activePozitionId).degreeMatrix)
  }
  const selectPozitionId = (pozitionId: PozitionIds): void => {
    setActivePozitionId(pozitionId)
    setDegreeMatrix(getHarpStrata(activeHarpId, pozitionId).degreeMatrix)
  }
  return (
    <div>
      <label htmlFor='apparatus'>Apparatus: </label>
      <span id='apparatus'>{activeHarpId}</span>
      <label htmlFor='pozition'>Position: </label>
      <span id='pozition'>{activePozitionId}</span>
      <HarpFace degreeMatrix={activeDegreeMatrix}/>
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
    </div>
  )
}
