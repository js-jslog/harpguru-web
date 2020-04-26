import React from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../useStyles'
import type { HoleInteractionProps } from '../types'
import { analysePosition } from '../analysePosition'


export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const { harpstrata, yxCoord } = props
  const positionFacts = analysePosition(harpstrata, yxCoord)
  const { thisDegree } = positionFacts

  const classes = useStyles(positionFacts)
  const [ yCoord, xCoord ] = yxCoord

  return (
    <div className={`${classes.holeInteractionClass} yx-coord-${yCoord}-${xCoord}`}>
      {thisDegree && thisDegree.id}
    </div>
  )
}
