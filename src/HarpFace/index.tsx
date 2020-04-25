import React from 'react'
import type { ReactElement } from 'react'
import type { DegreeRow, Degree } from 'harpstrata'

import { getBlowDrawBoundaryIndex } from './getBlowDrawBoundaryIndex'
import { HoleNumber } from './HoleNumber'
import { HoleInteraction } from './HoleInteraction'

import { useStyles } from './useStyles'
import type { HarpFaceProps, YXCoord } from './types'

type twoHalfHoleInteractions = {
  readonly downToBlow: ReactElement[];
  readonly downFromDraw: ReactElement[];
}

const generateHoleInteractions = (harpFaceProps: HarpFaceProps): twoHalfHoleInteractions => {
  const { harpstrata, theme } = harpFaceProps
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

const generateHoleNumbers = (harpFaceProps: HarpFaceProps): ReactElement[] => {
  const { harpstrata, theme } = harpFaceProps
  const { degreeMatrix } = harpstrata
  const [ degreeRow ] = degreeMatrix

  return degreeRow.map(function (degree: Degree | undefined, index: number) {
    return <HoleNumber key={index} xCoord={index} theme={theme} />
  })
}

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

export type { HarpFaceProps, YXCoord } from './types'
