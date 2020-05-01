import type { HoleNumberStyles } from '../../../HoleNumber'
import type { HoleInteractionStylesMap } from '../../../HoleInteraction'

export type HarpFaceStyles = {
  readonly holeInteractionStylesMap: HoleInteractionStylesMap;
  readonly holeNumberStyles: HoleNumberStyles;
  readonly columnWidths: number;
}
