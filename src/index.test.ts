import type { HarpStrata } from 'harpstrata'

import { getAHarp } from './index'

test('index contains a getAHarp function', () => {
  const harpStrata: HarpStrata = getAHarp()
  expect(harpStrata).toBeDefined()
})
