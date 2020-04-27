import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { DegreeIds } from 'harpstrata'

import { useStyles } from '../useStyles'
import type { HoleInteractionProps } from '../types'
import { analysePosition } from '../analysePosition'
import type { PositionFacts } from '../analysePosition'


export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const { harpStrata, yxCoord } = props
  const positionFacts: PositionFacts = analysePosition(harpStrata, yxCoord)
  const { thisDegree } = positionFacts

  const useStyleProps = { ...props, positionFacts}
  const classes = useStyles(useStyleProps)
  const [ yCoord, xCoord ] = yxCoord

  const [ activeDegreeId, setActiveDegreeId ] = useState(thisDegree && thisDegree.id)

  return (
    <div onClick={(): void => setActiveDegreeId(DegreeIds.Root)} className={`${classes.holeInteractionClass} yx-coord-${yCoord}-${xCoord}`}>
      {activeDegreeId}
    </div>
  )
}
