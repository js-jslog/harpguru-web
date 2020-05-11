import type { PitchIds } from 'harpstrata'

export type PitchButtonProps = {
  readonly id: PitchIds;
  readonly setPitchId: (pitchId: PitchIds) => void;
}
