import type { Theme } from '../../Theme'
import { generateHoleNumberStyle } from '../../HoleNumber'
import { generateHoleInteractionStyles } from '../../HoleInteraction'

import type { HarpFaceStyles } from './types'


export const generateHarpFaceStyles = (theme: Theme): HarpFaceStyles => {
  const holeInteractionStyles = generateHoleInteractionStyles(theme)
  const holeNumberStyle = generateHoleNumberStyle(theme)

  return {holeInteractionStyles, holeNumberStyle}
}
export type { HarpFaceStyles } from './types'
