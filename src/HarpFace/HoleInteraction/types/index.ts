import type { HarpStrata } from 'harpstrata'

import type { YXCoord } from '../../index'
import type { Theme } from '../../../index'

export type HoleInteractionProps = {
  readonly harpstrata: HarpStrata;
  readonly yxCoord: YXCoord;
  readonly theme: Theme;
}
