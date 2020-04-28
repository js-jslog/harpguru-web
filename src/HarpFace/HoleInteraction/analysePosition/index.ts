import type { Degree, Interaction } from 'harpstrata'

import type { HoleInteractionProps } from '../index'

export type PositionFacts = {
  readonly thisDegree: Degree | undefined;
  readonly thisInteraction: Interaction | undefined;
  readonly leftmost: boolean;
}

export const analysePosition = (props: HoleInteractionProps): PositionFacts => {
  const { harpStrata: { degreeMatrix }} = props
  const { harpStrata: { apparatus: {interactionMatrix}}} = props
  const { yxCoord: [ yCoord, xCoord ]} = props
  const { [yCoord]: {[xCoord]: thisDegree} } = degreeMatrix
  const { [yCoord]: {[xCoord]: thisInteraction} } = interactionMatrix
  const leftmost = (xCoord === 0)
  return {
    thisDegree,
    thisInteraction,
    leftmost
  }
}
