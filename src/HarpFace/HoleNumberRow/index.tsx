import React from 'react'
import type { ReactElement } from 'react'
import type { Degree } from 'harpstrata'

import type { HarpFaceProps } from '../index'
import type { HoleNumberProps } from '../HoleNumber'
import { HoleNumber } from '../HoleNumber'

export const HoleNumberRow = (harpFaceProps: HarpFaceProps): ReactElement[] => {
  const { harpStrata, theme } = harpFaceProps
  const { degreeMatrix } = harpStrata
  const [ degreeRow ] = degreeMatrix

  return degreeRow.map(function (degree: Degree | undefined, index: number) {
    const xCoord = index
    const holeNumberProps: HoleNumberProps = { xCoord, theme }
    return <HoleNumber key={index} { ...holeNumberProps } />
  })
}
