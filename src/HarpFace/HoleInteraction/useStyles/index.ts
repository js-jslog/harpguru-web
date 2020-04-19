import { createUseStyles } from 'react-jss'

import type { PositionFacts } from '../analysePosition'

const determineLeftBorder = (facts: PositionFacts): string => {
  const { atHere, occupiedLeft } = facts
  return (atHere === undefined || !occupiedLeft ? '0px' : '1px')
}

const determineColor = (facts: PositionFacts): string => {
  const { atHere } = facts
  return (atHere === undefined ? 'white' : 'black')
}

export const useStyles = createUseStyles({
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
