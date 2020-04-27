import React from 'react'
import type { ReactElement } from 'react'
import type { DegreeRow, Degree } from 'harpstrata'

import type { HarpFaceProps } from '../../index'
import { HoleInteraction } from '../../HoleInteraction'
import type { YXCoord } from '../../HarpFace'

export const mapToFlatComponentArray = (props: HarpFaceProps): ReactElement[] => {
  const { harpstrata, theme } = props
  const { degreeMatrix } = harpstrata
  const mapped = degreeMatrix.map(function (degreeRow: DegreeRow, indexy) {
    return degreeRow.map(function (degree: Degree | undefined, indexx) {
      const yxCoord: YXCoord = [indexy, indexx]
      return <HoleInteraction key={indexy + '-' + indexx} harpstrata={harpstrata} yxCoord={yxCoord} theme={theme} />
    })
  })

  return mapped.flat()
}
