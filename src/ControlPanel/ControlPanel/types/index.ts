import type { PozitionIds } from 'harpstrata'

import type { PresentationModes } from '../../../HarpFace'

export type ControlPanelProps = {
  readonly setPozitionId: (pozitionId: PozitionIds) => void;
  readonly setDisplayMode: (presentationMode: PresentationModes) => void;
}
