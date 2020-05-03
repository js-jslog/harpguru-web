import type { Degree, Pitch, Interaction } from 'harpstrata'

import type { HoleInteractionProps } from '../index'

export type PositionFacts = {
  readonly thisDegree: Degree | undefined;
  readonly thisPitch: Pitch | undefined;
  readonly thisInteraction: Interaction | undefined;
  readonly leftmost: boolean;
  readonly isActive: boolean;
}

export const analysePosition = (props: HoleInteractionProps): PositionFacts => {
  const { harpStrata: { degreeMatrix, pitchMatrix }} = props
  const { harpStrata: { apparatus: {interactionMatrix}}} = props
  const { yxCoord: [ yCoord, xCoord ]} = props
  const { inactiveInteractions } = props
  const { [yCoord]: {[xCoord]: thisDegree} } = degreeMatrix
  const { [yCoord]: {[xCoord]: thisPitch} } = pitchMatrix
  const { [yCoord]: {[xCoord]: thisInteraction} } = interactionMatrix
  const leftmost = (xCoord === 0)
  const isActive = !(thisInteraction && inactiveInteractions.includes(thisInteraction.id))
  return {
    thisDegree,
    thisPitch,
    thisInteraction,
    leftmost,
    isActive
  }
}
