import type { HarpStrata, Degree, Interaction } from 'harpstrata'

import type { YXCoord } from '../../HarpFace'

export type PositionFacts = {
  readonly thisDegree: Degree | undefined;
  readonly thisInteraction: Interaction | undefined;
  readonly leftmost: boolean;
}

export const analysePosition = (harpStrata: HarpStrata, yxCoord: YXCoord): PositionFacts => {
  const { degreeMatrix } = harpStrata
  const { apparatus: {interactionMatrix} } = harpStrata
  const [ yCoord, xCoord ] = yxCoord
  const { [yCoord]: {[xCoord]: thisDegree} } = degreeMatrix
  const { [yCoord]: {[xCoord]: thisInteraction} } = interactionMatrix
  const leftmost = (xCoord === 0)
  return {
    thisDegree,
    thisInteraction,
    leftmost
  }
}
