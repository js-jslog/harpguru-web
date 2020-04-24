import { createUseStyles } from 'react-jss'

import type { PositionFacts } from '../analysePosition'

const determineVisibility = (facts: PositionFacts): string => {
  const { thisDegree } = facts
  return (thisDegree === undefined ? 'hidden' : 'visible')
}

export const useStyles = createUseStyles({
  holeInteractionClass: {
    'border-radius': '5px',
    'border-width': '0px',
    'background-color': 'black',
    color: 'white',
    'font-size': '20px',
    height: '25px',
    margin: 'auto',
    'margin-top': '5px',
    'margin-bottom': '5px',
    'text-align': 'center',
    visibility: (facts: PositionFacts): string => determineVisibility(facts),
    width: '25px',
  }
})
