import React, { useState } from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../useStyles'
import type { HoleInteractionProps } from '../types'
import { analysePosition } from '../analysePosition'
import type { PositionFacts } from '../analysePosition'


export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const { harpStrata, yxCoord } = props
  const positionFacts: PositionFacts = analysePosition(harpStrata, yxCoord)
  const { thisDegree } = positionFacts

  const [ yCoord, xCoord ] = yxCoord

  const [ holeIsActive, setHoleIsActive ] = useState(true)

  const useStyleProps = { ...props, positionFacts, holeIsActive}
  const classes = useStyles(useStyleProps)

  return (
    <div onClick={(): void => setHoleIsActive(!holeIsActive)} className={`${classes.holeInteractionClass} yx-coord-${yCoord}-${xCoord}`}>
      {thisDegree && thisDegree.id}
    </div>
  )
}
