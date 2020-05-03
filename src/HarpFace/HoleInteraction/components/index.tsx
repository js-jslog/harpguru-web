import React from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../useStyles'
import type { HoleInteractionProps } from '../types'
import { analysePosition } from '../analysePosition'
import type { PositionFacts } from '../analysePosition'
import { PresentationModes } from '../../HarpFace'


export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const positionFacts: PositionFacts = analysePosition(props)
  const { thisDegree, thisPitch } = positionFacts
  const degreeId: string | undefined = thisDegree && thisDegree.id
  const pitchId: string | undefined = thisPitch && thisPitch.id

  const { yxCoord, presentationMode } = props
  const [ yCoord, xCoord ] = yxCoord

  const presentationValue = (presentationMode === PresentationModes.Degree ? degreeId : pitchId)

  const useStylesProps = { ...props, positionFacts }
  const classes = useStyles(useStylesProps)

  return (
    <div className={`${classes.holeInteractionClass} yx-coord-${yCoord}-${xCoord}`}>
      {presentationValue}
    </div>
  )
}
