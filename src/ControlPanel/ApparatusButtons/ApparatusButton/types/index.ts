import type { ApparatusIds } from 'harpstrata'

export type ApparatusButtonProps = {
  readonly id: ApparatusIds;
  readonly setApparatusId: (apparatusId: ApparatusIds) => void;
}
