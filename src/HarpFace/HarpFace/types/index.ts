import type { HarpStrata, DegreeIds } from 'harpstrata'

import type { HarpFaceStyles } from '../index'

export enum DisplayModes {
  Degree = 'DEGREE',
  Pitch = 'PITCH',
}

export type HarpFaceProps = {
  readonly harpStrata: HarpStrata;
  readonly displayMode: DisplayModes;
  readonly styles: HarpFaceStyles;
  readonly toggleActiveDegreeId: (degreeId: DegreeIds) => void;
}

export type YXCoord = [ number, number ]
