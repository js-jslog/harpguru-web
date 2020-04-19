import { createUseStyles } from 'react-jss'
import React from 'react'
import type { ReactElement } from 'react'
import type { DegreeMatrix } from 'harpstrata'

import { analysePosition } from './analysePosition'
import type { PositionFacts } from './analysePosition'

type HoleInteractionProps = {
  degreeMatrix: DegreeMatrix;
  yxCoord: [ number, number ];
}

const determineLeftBorder = (facts: PositionFacts): string => {
  const { atHere, occupiedLeft } = facts
  return (atHere === undefined || !occupiedLeft ? '0px' : '1px')
}

const determineColor = (facts: PositionFacts): string => {
  const { atHere } = facts
  return (atHere === undefined ? 'white' : 'black')
}

const useStyles = createUseStyles({
  holeInteractionClass: {
    color: (facts: PositionFacts): string => determineColor(facts),
    'border-width': '0px',
    'border-color': 'black',
    'border-style': 'solid',
    'border-left-width': (facts: PositionFacts): string => determineLeftBorder(facts),
    'font-size': '30px',
    'text-align': 'center',
  }
})

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
