import type { HarpStrata, InteractionIds } from 'harpstrata'

import type { HarpFaceStyles } from '../index'

export enum PresentationModes {
  Degree = 'DEGREE',
  Pitch = 'PITCH',
}

export type HarpFaceProps = {
  readonly harpStrata: HarpStrata;
  readonly inactiveInteractions: InteractionIds[];
  readonly presentationMode: PresentationModes;
  readonly styles: HarpFaceStyles;
}

export type YXCoord = [ number, number ]
