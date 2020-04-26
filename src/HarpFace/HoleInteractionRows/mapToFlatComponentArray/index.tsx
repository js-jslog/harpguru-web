import React from 'react'
import type { ReactElement } from 'react'
import type { DegreeRow, Degree } from 'harpstrata'

import type { HarpFaceProps, YXCoord } from '../../types'
import { HoleInteraction } from '../../HoleInteraction'

export const mapToFlatComponentArray = (props: HarpFaceProps): ReactElement[] => {
  const { harpstrata, theme } = props
  const { degreeMatrix } = harpstrata
  const mapped = degreeMatrix.map(function (degreeRow: DegreeRow, indexy) {
    return degreeRow.map(function (degree: Degree | undefined, indexx) {
      const yxCoord: YXCoord = [indexy, indexx]
      return <HoleInteraction key={indexy + '-' + indexx} harpstrata={harpstrata} yxCoord={yxCoord} theme={theme} />
    })
  })

  const flattened = mapped.flat()
  return flattened
}
