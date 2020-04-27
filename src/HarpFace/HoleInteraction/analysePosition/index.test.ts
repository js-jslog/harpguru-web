import { exampleHarpFaceProps } from '../../testResources'
import type { YXCoord } from '../../HarpFace'

import { analysePosition } from './index'

const { harpStrata } = exampleHarpFaceProps
const { degreeMatrix: [,,,[,,,ourDegree]]} = harpStrata
const { apparatus: { interactionMatrix: [,,,[,,,ourInteraction]]}} = harpStrata

test('leftmost is true if the provided coord has is 0 in the x axis and false otherwise', () => {
  const yxCoordLeftmostTrue: YXCoord = [ 0, 0 ]
  const yxCoordLeftmostFalse: YXCoord = [ 0, 1 ]
  const { leftmost: leftmostTrue } = analysePosition(harpStrata, yxCoordLeftmostTrue)
  const { leftmost: leftmostFalse } = analysePosition(harpStrata, yxCoordLeftmostFalse)
  expect(leftmostTrue).toBeTruthy()
  expect(leftmostFalse).toBeFalsy()
})

test('thisDegree & thisInteraction provide the degree and interaction at this position', () => {
  const ourDegreeCoord: YXCoord = [ 3, 3 ]
  const { thisDegree, thisInteraction } = analysePosition(harpStrata, ourDegreeCoord)
  expect(thisDegree).toBe(ourDegree)
  expect(thisInteraction).toBe(ourInteraction)
})
