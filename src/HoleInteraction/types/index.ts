import type { DegreeMatrix } from 'harpstrata'

import type { YXCoords } from '../../HarpFace'

export type HoleInteractionProps = {
  readonly degreeMatrix: DegreeMatrix;
  readonly yxCoord: YXCoords;
}
