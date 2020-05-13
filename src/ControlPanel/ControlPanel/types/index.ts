import type { ApparatusIds, PozitionIds, PitchIds } from 'harpstrata'

import type { DisplayModes } from '../../../HarpFace'

export type ControlPanelProps = {
  readonly setApparatusId: (apparatusId: ApparatusIds) => void;
  readonly setPozitionId: (pozitionId: PozitionIds) => void;
  readonly setPitchId: (pitchId: PitchIds) => void;
  readonly setDisplayMode: (displayMode: DisplayModes) => void;
}
