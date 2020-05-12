import React from 'react'
import type { ReactElement } from 'react'

import { useStyles } from '../useStyles'
import type { HarpFaceProps } from '../types'
import { HoleNumberRow } from '../../HoleNumberRow'
import { HoleInteractionRowsTop } from '../../HoleInteractionRows'
import { HoleInteractionRowsBottom } from '../../HoleInteractionRows'


export function HarpFace(props: HarpFaceProps): ReactElement {
  const classes = useStyles(props)
  const holeInteractionRowsTop = HoleInteractionRowsTop(props)
  const holeInteractionRowsBottom = HoleInteractionRowsBottom(props)
  const holeNumbers = HoleNumberRow(props)

  return (
    <div className={classes.harpFaceClass}>
      Harp Face
      { holeInteractionRowsTop }
      { holeNumbers }
      { holeInteractionRowsBottom }
    </div>
  )
}
