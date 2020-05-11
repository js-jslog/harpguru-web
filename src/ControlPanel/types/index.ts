import type { PozitionIds } from 'harpstrata'

export type ControlPanelProps = {
  readonly setPozitionId: (pozitionId: PozitionIds) => void;
}
