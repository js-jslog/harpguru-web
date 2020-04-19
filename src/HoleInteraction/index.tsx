import React from 'react'
import type { ReactElement } from 'react'

import { analysePosition } from './analysePosition'

import { useStyles } from './useStyles'
import type { HoleInteractionProps } from './types'

export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const { degreeMatrix, yxCoord } = props
  const positionFacts = analysePosition(degreeMatrix, yxCoord)
  const { atHere } = positionFacts

  const classes = useStyles(positionFacts)
  const [ yCoord, xCoord ] = yxCoord

  return (
    <div className={`${classes.holeInteractionClass} yx-coord-${yCoord}-${xCoord}`}>
      { (atHere && atHere.id) || '/' }
    </div>
  )
}
