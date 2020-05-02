import React from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../useStyles'
import type { HoleNumberProps } from '../types'

export function HoleNumber(props: HoleNumberProps): ReactElement {
  const { xCoord, styles } = props
  const holeNumber = xCoord + 1

  const classes = useStyles(styles)

  return (
    <div className={`${classes.holeInteractionClass}`}>
      {holeNumber}
    </div>
  )
}

export type { HoleNumberStyles } from '../styles'
