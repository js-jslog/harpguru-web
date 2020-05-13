import type { HarpStrata } from 'harpstrata'

import type { HarpFaceStyles } from '../index'

export enum DisplayModes {
  Degree = 'DEGREE',
  Pitch = 'PITCH',
}

export type HarpFaceProps = {
  readonly harpStrata: HarpStrata;
  readonly displayMode: DisplayModes;
  readonly styles: HarpFaceStyles;
}

export type YXCoord = [ number, number ]
