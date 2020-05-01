import type { Theme } from '../../Theme'
import { generateHoleNumberStyle } from '../../HoleNumber'
import { generateHoleInteractionStyles } from '../../HoleInteraction'

import type { HarpFaceStyles } from './types'


export const generateHarpFaceStyles = (theme: Theme): HarpFaceStyles => {
  const { sizesMap } = theme
  const holeInteractionStyles = generateHoleInteractionStyles(theme)
  const holeNumberStyle = generateHoleNumberStyle(theme)
  const { 7: columnWidths } = sizesMap

  return {holeInteractionStyles, holeNumberStyle, columnWidths}
}
export type { HarpFaceStyles } from './types'
