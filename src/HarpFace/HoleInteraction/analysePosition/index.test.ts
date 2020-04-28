import { exampleHarpFaceProps } from '../../testResources'
import type { YXCoord } from '../../HarpFace'

import { analysePosition } from './index'

const { harpStrata } = exampleHarpFaceProps
const { degreeMatrix: [,,,[,,,ourDegree]]} = harpStrata
const { apparatus: { interactionMatrix: [,,,[,,,ourInteraction]]}} = harpStrata

test('leftmost is true if the provided coord has is 0 in the x axis and false otherwise', () => {
  const yxCoordLeftmostTrue: YXCoord = [ 0, 0 ]
  const yxCoordLeftmostFalse: YXCoord = [ 0, 1 ]
  const { leftmost: leftmostTrue } = analysePosition({ ...exampleHarpFaceProps, yxCoord: yxCoordLeftmostTrue})
  const { leftmost: leftmostFalse } = analysePosition({ ...exampleHarpFaceProps, yxCoord: yxCoordLeftmostFalse})
  expect(leftmostTrue).toBeTruthy()
  expect(leftmostFalse).toBeFalsy()
})

test('thisDegree & thisInteraction provide the degree and interaction at this position', () => {
  const ourDegreeCoord: YXCoord = [ 3, 3 ]
  const { thisDegree, thisInteraction } = analysePosition({ ...exampleHarpFaceProps, yxCoord: ourDegreeCoord})
  expect(thisDegree).toBe(ourDegree)
  expect(thisInteraction).toBe(ourInteraction)
})

test('isActive is set to false if the position is in an inactive group and true otherwise', () => {
  const inactiveCoord: YXCoord = [ 1, 0 ]
  const activeCoord: YXCoord = [ 2, 0 ]
  const { isActive: isActiveInactive } = analysePosition({ ...exampleHarpFaceProps, yxCoord: inactiveCoord})
  const { isActive: isActiveActive } = analysePosition({ ...exampleHarpFaceProps, yxCoord: activeCoord})
  expect(isActiveInactive).toBe(false)
  expect(isActiveActive).toBe(true)
})
