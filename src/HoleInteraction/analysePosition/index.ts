import type { Degree, DegreeMatrix } from 'harpstrata'

import type { YXCoords } from '../../HarpFace'

export type PositionFacts = {
  readonly atHere: Degree | undefined;
  readonly occupiedLeft: boolean;
}

export const analysePosition = (degreeMatrix: DegreeMatrix, yxCoord: YXCoords): PositionFacts => {
  const [ yCoord, xCoord ] = yxCoord
  const { [yCoord]: {[xCoord]: atHere} } = degreeMatrix
  const { [yCoord]: {[xCoord-1]: leftDegree} } = degreeMatrix
  return {
    atHere,
    occupiedLeft: (leftDegree !== undefined)
  }
}
