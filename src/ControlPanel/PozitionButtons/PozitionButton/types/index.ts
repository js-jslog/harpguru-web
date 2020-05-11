import type { PozitionIds } from 'harpstrata'

export type PozitionButtonProps = {
  readonly id: PozitionIds;
  readonly setPozitionId: (pozitionId: PozitionIds) => void;
}
