import type { PozitionIds } from 'harpstrata'

export type PozitionButtonProps = {
  readonly id: PozitionIds;
  readonly label: string;
  readonly setPozitionId: (pozitionId: PozitionIds) => void;
}
