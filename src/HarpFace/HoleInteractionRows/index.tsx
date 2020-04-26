import React from 'react'
import type { ReactElement } from 'react'
import type { Degree, DegreeRow } from 'harpstrata'

import type { HarpFaceProps, YXCoord } from '../types'
import { HoleInteraction } from '../HoleInteraction'

import { getBlowDrawBoundaryIndex } from './getBlowDrawBoundaryIndex'

type TwoHalfHoleInteractions = {
  readonly downToBlow: ReactElement[];
  readonly downFromDraw: ReactElement[];
}

export const HoleInteractionRows = (props: HarpFaceProps): TwoHalfHoleInteractions => {
  const { harpstrata, theme } = props
  const { degreeMatrix, apparatus: {interactionMatrix} } = harpstrata
  const mapped = degreeMatrix.map(function (degreeRow: DegreeRow, indexy) {
    return degreeRow.map(function (degree: Degree | undefined, indexx) {
      const yxCoord: YXCoord = [indexy, indexx]
      return <HoleInteraction key={indexy + '-' + indexx} harpstrata={harpstrata} yxCoord={yxCoord} theme={theme} />
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
