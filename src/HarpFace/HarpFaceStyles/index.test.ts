import { generateStyles } from './index'

test('generateStyles returns an object', () => {
  const harpFaceStyles = generateStyles()
  expect(harpFaceStyles).toBeDefined()
})
