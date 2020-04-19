import React from 'react'
import type { ReactElement } from 'react'
import type { DegreeMatrix, DegreeRow, Degree } from 'harpstrata'

import { HoleInteraction } from '../HoleInteraction'

import { useStyles } from './useStyles'
import type { HarpFaceProps, YXCoords } from './types'

const generateHoleInteractions = (degreeMatrix: DegreeMatrix): ReactElement[] => {
  const mapped = degreeMatrix.map(function (degreeRow: DegreeRow, indexy) {
    return degreeRow.map(function (degree: Degree | undefined, indexx) {
      const yxCoord: YXCoords = [indexy, indexx]
      return <HoleInteraction key={indexx + '' + indexy} degreeMatrix={degreeMatrix} yxCoord={yxCoord} />
    })
  })
  const flattened = mapped.flat()
  return flattened
}

export function HarpFace(props: HarpFaceProps): ReactElement {
  const classes = useStyles(props)
  const { degreeMatrix } = props
  return (
    <div className={classes.harpFaceClass}>
      { generateHoleInteractions(degreeMatrix) }
    </div>
  )
}
