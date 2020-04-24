import { InteractionIds } from 'harpstrata'
import type { InteractionMatrix } from 'harpstrata'

import { getBlowDrawBoundaryIndex } from './index'

test('getBlowDrawBoundaryIndex returns the correct boundary index from an InteractionMatrix', () => {
  const interactionMatrix: InteractionMatrix = [
    [ {id: InteractionIds.Blow}, {id: InteractionIds.Blow} ],
    [ {id: InteractionIds.Draw}, {id: InteractionIds.Draw} ],
  ]
  const expectedIndex = 2
  const actualIndex = getBlowDrawBoundaryIndex(interactionMatrix)
  expect(actualIndex).toBe(expectedIndex)
})
