import React from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../useStyles'
import type { HarpFaceProps } from '../types'
import { generateHoleInteractions } from '../generateHoleInteractions'
import { generateHoleNumbers } from '../HoleNumber'


export function HarpFace(props: HarpFaceProps): ReactElement {
  const classes = useStyles(props)
  const { downToBlow, downFromDraw } = generateHoleInteractions(props)
  const holeNumbers = generateHoleNumbers(props)

  return (
    <div className={classes.harpFaceClass}>
      { downToBlow }
      { holeNumbers }
      { downFromDraw }
    </div>
  )
}
