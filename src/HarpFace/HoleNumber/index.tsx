import React from 'react'
import type { ReactElement } from 'react'

import { useStyles } from './useStyles'
import type { HoleNumberProps } from './types'

export function HoleNumber(props: HoleNumberProps): ReactElement {
  const { xCoord } = props
  const holeNumber = xCoord + 1

  const classes = useStyles()

  return (
    <div className={`${classes.holeInteractionClass}`}>
      {holeNumber}
    </div>
  )
}
