import { exampleHarpFaceProps } from '../../testResources'
import type { YXCoord } from '../../HarpFace'

import { analysePosition } from './index'

const { harpStrata } = exampleHarpFaceProps
const { degreeMatrix: [,,,[,,,ourDegree]]} = harpStrata
const { pitchMatrix: [,,,[,,,ourPitch]]} = harpStrata
const { apparatus: { interactionMatrix: [,,,[,,,ourInteraction]]}} = harpStrata

test('leftmost is true if the provided coord has is 0 in the x axis and false otherwise', () => {
  const yxCoordLeftmostTrue: YXCoord = [ 0, 0 ]
  const yxCoordLeftmostFalse: YXCoord = [ 0, 1 ]
  const { leftmost: leftmostTrue } = analysePosition({ ...exampleHarpFaceProps, yxCoord: yxCoordLeftmostTrue})
  const { leftmost: leftmostFalse } = analysePosition({ ...exampleHarpFaceProps, yxCoord: yxCoordLeftmostFalse})
  expect(leftmostTrue).toBeTruthy()
  expect(leftmostFalse).toBeFalsy()
})

test('thisDegree, thisPitch, thisInteraction & thisIsActive provide the degree, pitch, interaction and isActive status at this position', () => {
  const ourCoord: YXCoord = [ 3, 3 ]
  const { thisDegree, thisPitch, thisInteraction, thisIsActive } = analysePosition({ ...exampleHarpFaceProps, yxCoord: ourCoord})
  expect(thisDegree).toBe(ourDegree)
  expect(thisPitch).toBe(ourPitch)
  expect(thisInteraction).toBe(ourInteraction)
  expect(thisIsActive).toBe(thisIsActive)
})
