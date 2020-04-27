import React from 'react'
import type { ReactElement } from 'react'
import type { DegreeRow, Degree } from 'harpstrata'

import type { HarpFaceProps } from '../../index'
import { HoleInteraction } from '../../HoleInteraction'
import type { YXCoord } from '../../HarpFace'

export const mapToFlatComponentArray = (props: HarpFaceProps): ReactElement[] => {
  const { harpStrata, theme } = props
  const { degreeMatrix } = harpStrata
  const mapped = degreeMatrix.map(function (degreeRow: DegreeRow, indexy) {
    return degreeRow.map(function (degree: Degree | undefined, indexx) {
      const yxCoord: YXCoord = [indexy, indexx]
      return <HoleInteraction key={indexy + '-' + indexx} harpStrata={harpStrata} yxCoord={yxCoord} theme={theme} />
    })
  })

  return mapped.flat()
}
