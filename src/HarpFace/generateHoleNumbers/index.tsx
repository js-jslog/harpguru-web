import React from 'react'
import type { ReactElement } from 'react'
import type { Degree } from 'harpstrata'

import type { HarpFaceProps } from '../types'
import { HoleNumber } from '../HoleNumber'

export const generateHoleNumbers = (harpFaceProps: HarpFaceProps): ReactElement[] => {
  const { harpstrata, theme } = harpFaceProps
  const { degreeMatrix } = harpstrata
  const [ degreeRow ] = degreeMatrix

  return degreeRow.map(function (degree: Degree | undefined, index: number) {
    return <HoleNumber key={index} xCoord={index} theme={theme} />
  })
}
