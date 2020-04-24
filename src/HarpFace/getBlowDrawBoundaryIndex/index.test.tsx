import { InteractionIds } from 'harpstrata'
import type { InteractionMatrix } from 'harpstrata'

import { getBlowDrawBoundaryIndex } from './index'

test('getBlowDrawBoundaryIndex returns the correct boundary index from an InteractionMatrix', () => {
  const interactionMatrix: InteractionMatrix = [
    [ {id: InteractionIds.Blow}, {id: InteractionIds.Blow} ],
    [ {id: InteractionIds.Draw}, {id: InteractionIds.Draw} ],
    [ {id: InteractionIds.Bend1}, {id: InteractionIds.Bend1} ],
  ]
  const expectedIndex = 2
  const actualIndex = getBlowDrawBoundaryIndex(interactionMatrix)
  expect(actualIndex).toBe(expectedIndex)
})
