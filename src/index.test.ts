import { getHarpIds, getAHarp } from './index'

test('index contains a getHarpIds function', () => {
  expect(getHarpIds).toBeDefined()
})

test('index contains a getAHarp function', () => {
  expect(getAHarp).toBeDefined()
})
