import React, { useState } from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../useStyles'
import type { HoleInteractionProps } from '../types'
import { analysePosition } from '../analysePosition'
import type { PositionFacts } from '../analysePosition'


export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const { harpStrata, yxCoord } = props
  const positionFacts: PositionFacts = analysePosition(harpStrata, yxCoord)
  const { thisDegree, thisInteraction } = positionFacts
  const degreeId: string | undefined = thisDegree && thisDegree.id
  const interactionId = thisInteraction && thisInteraction.id

  const [ yCoord, xCoord ] = yxCoord

  const [ valueToDisplay, setValueToDisplay ] = useState(degreeId)

  const holeIsActive = true
  const useStyleProps = { ...props, positionFacts, holeIsActive }
  const classes = useStyles(useStyleProps)

  return (
    <div onClick={(): void => setValueToDisplay(interactionId)} className={`${classes.holeInteractionClass} yx-coord-${yCoord}-${xCoord}`}>
      {valueToDisplay}
    </div>
  )
}
