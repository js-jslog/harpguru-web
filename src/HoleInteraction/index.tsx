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

const determineLeftBorder = (props: PositionFacts): string => {
  const { atHere, occupiedLeft } = props
  return (atHere === undefined || !occupiedLeft ? '0px' : '1px')
}

const determineColor = (props: PositionFacts): string => {
  const { atHere } = props
  return (atHere === undefined ? 'white' : 'black')
}

const useStyles = createUseStyles({
  holeInteractionClass: {
    color: (props: PositionFacts): string => determineColor(props),
    'border-width': '0px',
    'border-color': 'black',
    'border-style': 'solid',
    'border-left-width': (props: PositionFacts): string => determineLeftBorder(props),
    'font-size': '30px',
    'text-align': 'center',
  }
})

export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const { degreeMatrix, yxCoord } = props
  const positionFacts = analysePosition(degreeMatrix, yxCoord)
  const [ yCoord, xCoord ] = yxCoord
  const { atHere: degree } = positionFacts
  const degreeId = (degree && degree.id) || '/'
  const yxCoordString = `${yCoord}-${xCoord}`
  const classes = useStyles(positionFacts)
  return (
    <div className={`${classes.holeInteractionClass} yx-coord-${yxCoordString}`}>
      { degreeId }
    </div>
  )
}
