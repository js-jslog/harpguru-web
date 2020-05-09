import { DegreeIds } from 'harpstrata'
import type { ActiveDegreeIds } from 'harpstrata'

import { toggleActiveDegreeIds } from './index'

test('toggleActiveDegreeIds will take a DegreeId and add it to an ActiveDegreeIds which doesn\'t already have the Id in it and calls a setter function with the result', () => {
  const activeDegreeIds: ActiveDegreeIds = []
  const { Root: degreeId } = DegreeIds
  const setActiveDegreeIds = jest.fn()
  const expectedActiveDegreeIds: ActiveDegreeIds = [ DegreeIds.Root ]

  toggleActiveDegreeIds(degreeId, activeDegreeIds, setActiveDegreeIds)

  expect(setActiveDegreeIds.mock.calls[0][0]).toEqual(expectedActiveDegreeIds)
})

test('toggleActiveDegreeIds will take a DegreeId and remove it from an ActiveDegreeIds which does already have the Id in it and calls a setter function with the result', () => {
  const activeDegreeIds: ActiveDegreeIds = [ DegreeIds.Root ]
  const { Root: degreeId } = DegreeIds
  const setActiveDegreeIds = jest.fn()
  const expectedActiveDegreeIds: ActiveDegreeIds = []

  toggleActiveDegreeIds(degreeId, activeDegreeIds, setActiveDegreeIds)

  expect(setActiveDegreeIds.mock.calls[0][0]).toEqual(expectedActiveDegreeIds)
})
