import { DegreeIds } from 'harpstrata'
import type { Degree } from 'harpstrata'

import { analysePosition } from './index'

test('occupiedLeft is true if the provided coord has an occupied position to it\'s left', () => {
  const degreeMatrix = [[
    {id: DegreeIds.Root}, {id: DegreeIds.Second}
  ]]
  const yxCoord: [number, number] = [ 0, 1 ]
  const { occupiedLeft } = analysePosition(degreeMatrix, yxCoord)
  expect(occupiedLeft).toBeTruthy()
})

test('occupiedLeft is false if the provided coord has an undefined position to it\'s left, or no position at all', () => {
  const degreeMatrix = [
    [{id: DegreeIds.Root}, {id: DegreeIds.Second}],
    [undefined           , {id: DegreeIds.Second}],
  ]
  const yxCoordLeftmost: [number, number] = [ 0, 0 ]
  const yxCoordUndefinedLeft: [number, number] = [ 1, 1 ]
  const { occupiedLeft: leftmostOccupiedLeft} = analysePosition(degreeMatrix, yxCoordLeftmost)
  const { occupiedLeft: undefinedLeftOccupiedLeft} = analysePosition(degreeMatrix, yxCoordUndefinedLeft)
  expect(leftmostOccupiedLeft).toBeFalsy()
  expect(undefinedLeftOccupiedLeft).toBeFalsy()
})

test('atHere provides the degree at this position', () => {
  const ourDegree: Degree = {id: DegreeIds.Second}
  const degreeMatrix = [
    [{id: DegreeIds.Root}, ourDegree             ],
    [undefined           , {id: DegreeIds.Second}],
  ]
  const ourDegreeCoords: [number, number] = [ 0, 1 ]
  const { atHere } = analysePosition(degreeMatrix, ourDegreeCoords)
  expect(atHere).toBe(ourDegree)
})
