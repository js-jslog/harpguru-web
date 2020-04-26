import React from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../index'
import type { HoleNumberProps } from '../index'

export function HoleNumber(props: HoleNumberProps): ReactElement {
  const { xCoord, theme } = props
  const holeNumber = xCoord + 1

  const classes = useStyles(theme)

  return (
    <div className={`${classes.holeInteractionClass}`}>
      {holeNumber}
    </div>
  )
}
