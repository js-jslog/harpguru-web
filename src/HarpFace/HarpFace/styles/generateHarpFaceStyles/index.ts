import type { HarpFaceStyles } from '../types'
import type { Theme } from '../../../Theme'
import { generateHoleNumberStyles } from '../../../HoleNumber'
import { generateHoleInteractionStylesMap } from '../../../HoleInteraction'


export const generateHarpFaceStyles = (theme: Theme): HarpFaceStyles => {
  const { sizes } = theme
  const holeInteractionStylesMap = generateHoleInteractionStylesMap(theme)
  const holeNumberStyles = generateHoleNumberStyles(theme)
  const { 7: columnWidths } = sizes

  return {holeInteractionStylesMap, holeNumberStyles, columnWidths}
}
