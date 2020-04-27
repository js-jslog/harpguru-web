import type { ReactElement } from 'react'

import { mapToFlatComponentArray } from '../mapToFlatComponentArray'
import { getBlowDrawBoundaryIndex } from '../getBlowDrawBoundaryIndex'
import type { HarpFaceProps } from '../../index'


export const HoleInteractionRowsTop = (props: HarpFaceProps): ReactElement[] => {
  const flattened = mapToFlatComponentArray(props)
  const { harpstrata: {apparatus: {interactionMatrix} }} = props
  const divideIndex = getBlowDrawBoundaryIndex(interactionMatrix)

  return flattened.slice(0, divideIndex)
}
