import { exampleHarpFaceProps } from '../../testResources'

import { getBlowDrawBoundaryIndex } from './index'

test('getBlowDrawBoundaryIndex returns the correct boundary index from an InteractionMatrix', () => {
  const { harpStrata: {apparatus: { interactionMatrix }}} = exampleHarpFaceProps
  const expectedIndex = 30
  const actualIndex = getBlowDrawBoundaryIndex(interactionMatrix)
  expect(actualIndex).toBe(expectedIndex)
})
