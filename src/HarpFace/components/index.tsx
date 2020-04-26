import React from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../useStyles'
import type { HarpFaceProps } from '../types'
import { HoleNumberRow } from '../HoleNumberRow'
import { HoleInteractionRows } from '../HoleInteractionRows'


export function HarpFace(props: HarpFaceProps): ReactElement {
  const classes = useStyles(props)
  const { downToBlow, downFromDraw } = HoleInteractionRows(props)
  const holeNumbers = HoleNumberRow(props)

  return (
    <div className={classes.harpFaceClass}>
      { downToBlow }
      { holeNumbers }
      { downFromDraw }
    </div>
  )
}
