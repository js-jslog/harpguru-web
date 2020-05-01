import type { Theme } from '../../Theme'
import { generateHoleNumberStyles } from '../../HoleNumber'
import { generateHoleInteractionStylesMap } from '../../HoleInteraction'

import type { HarpFaceStyles } from './types'


export const generateHarpFaceStyles = (theme: Theme): HarpFaceStyles => {
  const { sizes } = theme
  const holeInteractionStyles = generateHoleInteractionStylesMap(theme)
  const holeNumberStyles = generateHoleNumberStyles(theme)
  const { 7: columnWidths } = sizes

  return {holeInteractionStyles, holeNumberStyles, columnWidths}
}
export type { HarpFaceStyles } from './types'
