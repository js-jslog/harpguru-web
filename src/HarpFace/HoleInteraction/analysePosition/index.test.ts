import { ApparatusIds, InteractionIds, DegreeIds } from 'harpstrata'
import type { HarpStrata, Degree } from 'harpstrata'

import type { YXCoords } from '../../index'

import { analysePosition } from './index'

const ourDegree = { id: DegreeIds.Flat2 }
const ourInteraction = { id: InteractionIds.Blow }
const apparatus = {
  id: ApparatusIds.MajorDiatonic,
  halfstepIndexMatrix: [[ 0, 1]],
  interactionMatrix: [[ {id: InteractionIds.Blow}, ourInteraction ]],
}
const harpstrata: HarpStrata = {
  apparatus,
  degreeMatrix: [[{ id: DegreeIds.Root }, ourDegree ]]
}

test('leftmost is true if the provided coord has is 0 in the x axis and false otherwise', () => {
  const yxCoordLeftmostTrue: YXCoords = [ 0, 0 ]
  const yxCoordLeftmostFalse: YXCoords = [ 0, 1 ]
  const { leftmost: leftmostTrue } = analysePosition(harpstrata, yxCoordLeftmostTrue)
  const { leftmost: leftmostFalse } = analysePosition(harpstrata, yxCoordLeftmostFalse)
  expect(leftmostTrue).toBeTruthy()
  expect(leftmostFalse).toBeFalsy()
})

test('thisDegree & thisInteraction provide the degree and interaction at this position', () => {
  const ourDegreeCoords: YXCoords = [ 0, 1 ]
  const { thisDegree, thisInteraction } = analysePosition(harpstrata, ourDegreeCoords)
  expect(thisDegree).toBe(ourDegree)
  expect(thisInteraction).toBe(ourInteraction)
})
