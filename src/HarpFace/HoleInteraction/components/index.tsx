import React, { useState, useEffect } from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../useStyles'
import type { HoleInteractionProps } from '../types'
import { analysePosition } from '../analysePosition'
import type { PositionFacts } from '../analysePosition'
import { DisplayModes } from '../../HarpFace'


export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const positionFacts: PositionFacts = analysePosition(props)
  const { thisDegree, thisPitch } = positionFacts
  const degreeId: string | undefined = thisDegree && thisDegree.id
  const pitchId: string | undefined = thisPitch && thisPitch.id

  const { yxCoord, displayMode } = props
  const [ yCoord, xCoord ] = yxCoord

  const displayModeValue = (displayMode === DisplayModes.Degree ? degreeId : pitchId)

  const [ valueToDisplay, setValueToDisplay ] = useState(displayModeValue)
  useEffect(() => { setValueToDisplay(displayModeValue)}, [displayModeValue])

  const useStylesProps = { ...props, positionFacts }
  const classes = useStyles(useStylesProps)

  const setNextValueToDisplay = (): void => {
    const orderedValuesToDisplay = [ degreeId, pitchId ]
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
