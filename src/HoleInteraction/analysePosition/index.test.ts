import { analysePosition } from './index'

test('analysePosition is a function', () => {
  expect(analysePosition).toBeDefined()
})

test('occupiedLeft is true', () => {
  const { occupiedLeft } = analysePosition()
  expect(occupiedLeft).toBeTruthy()
})
