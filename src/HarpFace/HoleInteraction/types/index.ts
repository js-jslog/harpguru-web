import type { HarpStrata } from 'harpstrata'

import type { YXCoords } from '../../index'

export type HoleInteractionProps = {
  readonly harpstrata: HarpStrata;
  readonly yxCoord: YXCoords;
}
