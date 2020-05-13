import type { PitchIds } from 'harpstrata'

import type { PitchButtonsProps } from '../../PitchButtons'

export type PitchButtonProps = PitchButtonsProps & {
  readonly id: PitchIds;
}
