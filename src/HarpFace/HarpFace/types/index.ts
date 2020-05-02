import type { HarpStrata, InteractionIds } from 'harpstrata'

import type { HarpFaceStyles } from '../index'

export type HarpFaceProps = {
  readonly harpStrata: HarpStrata;
  readonly inactiveInteractions: InteractionIds[];
  readonly styles: HarpFaceStyles;
}

export type YXCoord = [ number, number ]
