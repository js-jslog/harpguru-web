import type { Degree, DegreeMatrix } from 'harpstrata'

export interface PositionFacts {
  readonly atHere: Degree | undefined;
  readonly occupiedLeft: boolean;
}

export const analysePosition = (degreeMatrix: DegreeMatrix, yxCoord: [number, number]): PositionFacts => {
  const [ yCoord, xCoord ] = yxCoord
  const { [yCoord]: {[xCoord]: atHere} } = degreeMatrix
  const { [yCoord]: {[xCoord-1]: leftDegree} } = degreeMatrix
  return {
    atHere,
    occupiedLeft: (leftDegree !== undefined)
  }
}
