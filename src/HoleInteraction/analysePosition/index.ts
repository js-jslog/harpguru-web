import type { DegreeMatrix } from 'harpstrata'

interface PositionAnalysis {
  readonly occupiedLeft: boolean;
}

export const analysePosition = (degreeMatrix: DegreeMatrix, yxCoord: [number, number]): PositionAnalysis => {
  const [ yCoord, xCoord ] = yxCoord
  const { [yCoord]: {[xCoord-1]: leftDegree} } = degreeMatrix
  return {
    occupiedLeft: (leftDegree !== undefined)
  }
}
