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

  const { yxCoord, displayMode, toggleActiveDegreeId } = props
  const [ yCoord, xCoord ] = yxCoord

  const displayModeValue = (displayMode === DisplayModes.Degree ? degreeId : pitchId)

  const [ valueToDisplay, setValueToDisplay ] = useState(displayModeValue)
  useEffect(() => { setValueToDisplay(displayModeValue)}, [displayModeValue])

  const useStylesProps = { ...props, positionFacts }
  const classes = useStyles(useStylesProps)

  return (
    <div onClick={(): void => toggleActiveDegreeId()} className={`${classes.holeInteractionClass} yx-coord-${yCoord}-${xCoord}`}>
      {valueToDisplay}
    </div>
  )
}
