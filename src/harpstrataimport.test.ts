import type { HarpStrata } from 'harpstrata'

import { getAHarp } from './harpstrataimport'

test('index contains a getAHarp function', () => {
  const harpStrata: HarpStrata = getAHarp()
  expect(harpStrata).toBeDefined()
})
