import type { PozitionIds } from 'harpstrata'

import type { PozitionButtonsProps } from '../../PozitionButtons'

export type PozitionButtonProps = PozitionButtonsProps & {
  readonly id: PozitionIds;
}
