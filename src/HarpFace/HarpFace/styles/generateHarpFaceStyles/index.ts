import type { HarpFaceStyles } from '../types'
import type { Theme } from '../../../Theme'
import { generateHoleNumberStyles } from '../../../HoleNumber'
import { generateHoleInteractionStylesMap } from '../../../HoleInteraction'


export const generateHarpFaceStyles = (theme: Theme): HarpFaceStyles => {
  const holeInteractionStylesMap = generateHoleInteractionStylesMap(theme)
  const holeNumberStyles = generateHoleNumberStyles(theme)
  const { sizes } = theme
  const { 10: columnWidths } = sizes

  return {holeInteractionStylesMap, holeNumberStyles, columnWidths}
}
