import React from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../useStyles'
import type { HarpFaceProps } from '../types'
import { HoleNumberRow } from '../HoleNumberRow'
import { generateHoleInteractions } from '../HoleInteraction'


export function HarpFace(props: HarpFaceProps): ReactElement {
  const classes = useStyles(props)
  const { downToBlow, downFromDraw } = generateHoleInteractions(props)
  const holeNumbers = HoleNumberRow(props)

  return (
    <div className={classes.harpFaceClass}>
      { downToBlow }
      { holeNumbers }
      { downFromDraw }
    </div>
  )
}
