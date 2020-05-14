import React from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../useStyles'
import type { HoleInteractionProps } from '../types'
import { analysePosition } from '../analysePosition'
import type { PositionFacts } from '../analysePosition'
import { DisplayModes } from '../../HarpFace'


export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const positionFacts: PositionFacts = analysePosition(props)
  const { thisDegree, thisPitch } = positionFacts
  const { id: degreeId } = thisDegree || { id: undefined }
  const { id: pitchId } = thisPitch || { id: undefined }

  const { displayMode, toggleActiveDegreeId } = props

  const displayModeValue = (displayMode === DisplayModes.Degree ? degreeId : pitchId)

  const useStylesProps = { ...props, positionFacts }
  const classes = useStyles(useStylesProps)

  const toggleActiveDegreeIfHoleExists = (): void => {
    if (degreeId === undefined) return
    toggleActiveDegreeId(degreeId)
  }

  return (
    <div onClick={(): void => toggleActiveDegreeIfHoleExists()} className={classes.holeInteractionClass}>
      {displayModeValue}
    </div>
  )
}
