import type { HarpStrata, InteractionIds } from 'harpstrata'

import type { HarpFaceStyles } from '../index'
import type { Theme } from '../../index'

export type HarpFaceProps = {
  readonly harpStrata: HarpStrata;
  readonly inactiveInteractions: InteractionIds[];
  readonly theme: Theme;
  readonly styles: HarpFaceStyles;
}

export type YXCoord = [ number, number ]
