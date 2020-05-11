import type { ApparatusIds, PozitionIds } from 'harpstrata'

import type { PresentationModes } from '../../../HarpFace'

export type ControlPanelProps = {
  readonly setApparatusId: (pozitionId: ApparatusIds) => void;
  readonly setPozitionId: (pozitionId: PozitionIds) => void;
  readonly setDisplayMode: (presentationMode: PresentationModes) => void;
}
