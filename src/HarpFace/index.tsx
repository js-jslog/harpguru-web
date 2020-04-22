import React from 'react'
import type { ReactElement } from 'react'
import type { HarpStrata, DegreeRow, Degree } from 'harpstrata'

import { HoleInteraction } from './HoleInteraction'

import { useStyles } from './useStyles'
import type { HarpFaceProps, YXCoord } from './types'

const generateHoleInteractions = (harpstrata: HarpStrata): ReactElement[] => {
  const { degreeMatrix } = harpstrata
  const mapped = degreeMatrix.map(function (degreeRow: DegreeRow, indexy) {
    return degreeRow.map(function (degree: Degree | undefined, indexx) {
      const yxCoord: YXCoord = [indexy, indexx]
      return <HoleInteraction key={indexy + '-' + indexx} harpstrata={harpstrata} yxCoord={yxCoord} />
    })
  })
  const flattened = mapped.flat()
  return flattened
}

export function HarpFace(props: HarpFaceProps): ReactElement {
  const classes = useStyles(props)
  const { harpstrata } = props
  return (
    <div className={classes.harpFaceClass}>
      { generateHoleInteractions(harpstrata) }
    </div>
  )
}

export type { HarpFaceProps, YXCoord } from './types'
