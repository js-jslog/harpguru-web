import type { HoleNumberStyle } from '../../../HoleNumber'
import type { HoleInteractionStyles } from '../../../HoleInteraction'

export type HarpFaceStyles = {
  readonly holeInteractionStyles: HoleInteractionStyles;
  readonly holeNumberStyle: HoleNumberStyle;
  readonly columnWidths: number;
}
