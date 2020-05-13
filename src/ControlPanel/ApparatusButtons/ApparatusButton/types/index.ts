import type { ApparatusIds } from 'harpstrata'

import type { ApparatusButtonsProps } from '../../ApparatusButtons'

export type ApparatusButtonProps = ApparatusButtonsProps & {
  readonly id: ApparatusIds;
}
