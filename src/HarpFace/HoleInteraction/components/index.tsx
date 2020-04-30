import React, { useState, useEffect } from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../useStyles'
import type { HoleInteractionProps } from '../types'
import { analysePosition } from '../analysePosition'
import type { PositionFacts } from '../analysePosition'


export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const positionFacts: PositionFacts = analysePosition(props)
  const { thisDegree, thisInteraction } = positionFacts
  const degreeId: string | undefined = thisDegree && thisDegree.id
  const interactionId = thisInteraction && thisInteraction.id

  const { yxCoord } = props
  const [ yCoord, xCoord ] = yxCoord

  const [ valueToDisplay, setValueToDisplay ] = useState(degreeId)
  useEffect(() => { setValueToDisplay(degreeId)}, [degreeId])

  const useStyleProps = { ...props, positionFacts }
  const classes = useStyles(useStyleProps)

  const setNextValueToDisplay = (): void => {
    const orderedValuesToDisplay = [ degreeId, interactionId ]
    const currentIndex = orderedValuesToDisplay.indexOf(valueToDisplay)
    const nextValue = orderedValuesToDisplay[currentIndex +1] || orderedValuesToDisplay[0]
    setValueToDisplay(nextValue)
  }

  return (
    <div onClick={(): void => setNextValueToDisplay()} className={`${classes.holeInteractionClass} yx-coord-${yCoord}-${xCoord}`}>
      {valueToDisplay}
    </div>
  )
}
