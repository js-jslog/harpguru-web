import type { DegreeMatrix } from 'harpstrata'

import type { YXCoords } from '../../index'

export type HoleInteractionProps = {
  readonly degreeMatrix: DegreeMatrix;
  readonly yxCoord: YXCoords;
}
