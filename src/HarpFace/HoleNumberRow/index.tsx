import React from 'react'
import type { ReactElement } from 'react'
import type { Degree } from 'harpstrata'

import type { HarpFaceProps } from '../index'
import { HoleNumber } from '../HoleNumber'

export const HoleNumberRow = (harpFaceProps: HarpFaceProps): ReactElement[] => {
  const { harpstrata, theme } = harpFaceProps
  const { degreeMatrix } = harpstrata
  const [ degreeRow ] = degreeMatrix

  return degreeRow.map(function (degree: Degree | undefined, index: number) {
    const xCoord = index
    const holeNumberProps = { xCoord, theme }
    return <HoleNumber key={index} { ...holeNumberProps } />
  })
}
