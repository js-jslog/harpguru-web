import { createUseStyles } from 'react-jss'
import { InteractionIds } from 'harpstrata'

import type { PositionFacts } from '../analysePosition'

const determineLeftBorder = (facts: PositionFacts): string => {
  const { thisInteraction, leftmost } = facts
  const isBlow = (thisInteraction && thisInteraction.id === InteractionIds.Blow)
  const isDraw = (thisInteraction && thisInteraction.id === InteractionIds.Draw)
  const isBlowOrDraw = isBlow || isDraw
  return (isBlowOrDraw && !leftmost ? '1px' : '0px')
}

const determineColor = (facts: PositionFacts): string => {
  const { thisDegree } = facts
  return (thisDegree === undefined ? 'white' : 'black')
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
    'padding-top': '15px',
    'padding-bottom': '15px',
  }
})
