import React from 'react'
import type { ReactElement } from 'react'
import type { HarpStrata, DegreeRow, Degree } from 'harpstrata'

import { getBlowDrawBoundaryIndex } from './getBlowDrawBoundaryIndex'
import { HoleNumber } from './HoleNumber'
import { HoleInteraction } from './HoleInteraction'

import { useStyles } from './useStyles'
import type { HarpFaceProps, YXCoord } from './types'

type twoHalfHoleInteractions = {
  readonly downToBlow: ReactElement[];
  readonly downFromDraw: ReactElement[];
}

const generateHoleInteractions = (harpstrata: HarpStrata): twoHalfHoleInteractions => {
  const { degreeMatrix, apparatus: {interactionMatrix} } = harpstrata
  const mapped = degreeMatrix.map(function (degreeRow: DegreeRow, indexy) {
    return degreeRow.map(function (degree: Degree | undefined, indexx) {
      const yxCoord: YXCoord = [indexy, indexx]
      return <HoleInteraction key={indexy + '-' + indexx} harpstrata={harpstrata} yxCoord={yxCoord} />
    })
  })
  const flattened = mapped.flat()

  const divideIndex = getBlowDrawBoundaryIndex(interactionMatrix)
  const downToBlow = flattened.slice(0, divideIndex)
  const downFromDraw = flattened.slice(divideIndex)

  return {
    downToBlow,
    downFromDraw,
  }
}

const generateHoleNumbers = (harpstrata: HarpStrata): ReactElement[] => {
  const { degreeMatrix } = harpstrata
  const [ degreeRow ] = degreeMatrix

  return degreeRow.map(function (degree: Degree | undefined, index: number) {
    return <HoleNumber key={index} xCoord={index} />
  })
}

export function HarpFace(props: HarpFaceProps): ReactElement {
  const classes = useStyles(props)
  const { harpstrata } = props
  const { downToBlow, downFromDraw } = generateHoleInteractions(harpstrata)
  const holeNumbers = generateHoleNumbers(harpstrata)
  return (
    <div className={classes.harpFaceClass}>
      { downToBlow }
      { holeNumbers }
      { downFromDraw }
    </div>
  )
}

export type { HarpFaceProps, YXCoord } from './types'
