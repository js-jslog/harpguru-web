import { createUseStyles } from 'react-jss'
import React from 'react'
import type { ReactElement } from 'react'
import type { DegreeMatrix } from 'harpstrata'

type HoleInteractionProps = {
  degreeMatrix: DegreeMatrix;
  yxCoord: [ number, number ];
}

const determineLeftBorder = (props: HoleInteractionProps): string => {
  const { degreeMatrix, yxCoord } = props
  const [ yCoord, xCoord ] = yxCoord
  const thisDegree = degreeMatrix[yCoord][xCoord]
  const leftVoid = (xCoord === 0 || degreeMatrix[yCoord][xCoord -1] === undefined)
  return (leftVoid || thisDegree === undefined ? '0px' : '1px')
}

const determineColor = (props: HoleInteractionProps): string => {
  const { degreeMatrix, yxCoord } = props
  const [ yCoord, xCoord ] = yxCoord
  const thisDegree = degreeMatrix[yCoord][xCoord]
  return (thisDegree === undefined ? 'white' : 'black')
}

const useStyles = createUseStyles({
  holeInteractionClass: {
    color: (props: HoleInteractionProps): string => determineColor(props),
    'border-width': '0px',
    'border-color': 'black',
    'border-style': 'solid',
    'border-left-width': (props: HoleInteractionProps): string => determineLeftBorder(props),
    'font-size': '30px',
    'text-align': 'center',
  }
})

export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const classes = useStyles(props)
  const yxCoordString = `${props.yxCoord[0]}-${props.yxCoord[1]}`
  const { degreeMatrix, yxCoord } = props
  const [ yCoord, xCoord ] = yxCoord
  const thisDegree = degreeMatrix[yCoord][xCoord] && degreeMatrix[yCoord][xCoord].id
  return (
    <div className={`${classes.holeInteractionClass} yx-coord-${yxCoordString}`}>
      { thisDegree || '/' }
    </div>
  )
}
