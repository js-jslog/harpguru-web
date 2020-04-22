import type { HarpStrata } from 'harpstrata'
import { DegreeIds } from 'harpstrata'

import { getFirstPositionHarp, getSecondPositionHarp } from './harpstrataimport'

test('index contains a getFirstPositionHarp function', () => {
  const harpStrata: HarpStrata = getFirstPositionHarp()
  const { degreeMatrix } = harpStrata
  const degree = degreeMatrix[2][0] && degreeMatrix[2][0].id || undefined
  expect(harpStrata).toBeDefined()
  expect(degree).toBe(DegreeIds.Root)
})

test('index contains a getSecondPositionHarp function', () => {
  const harpStrata: HarpStrata = getSecondPositionHarp()
  const { degreeMatrix } = harpStrata
  const degree = degreeMatrix[3][1] && degreeMatrix[3][1].id || undefined
  expect(harpStrata).toBeDefined()
  expect(degree).toBe(DegreeIds.Root)
})
