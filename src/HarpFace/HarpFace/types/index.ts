import type { HarpStrata, InteractionIds } from 'harpstrata'

import type { Theme } from '../../index'

export type HarpFaceProps = {
  readonly harpStrata: HarpStrata;
  readonly inactiveInteractions: InteractionIds[];
  readonly theme: Theme;
}

export type YXCoord = [ number, number ]
