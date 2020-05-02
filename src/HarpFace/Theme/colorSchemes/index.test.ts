import { ColorSchemeIds, getActiveColorSchemeIds, getColorScheme } from './index'

test('getActiveApparatusIds function returns an array of the available apparatus Ids', () => {
  const colorSchemeIds = getActiveColorSchemeIds()
  expect(colorSchemeIds.includes(ColorSchemeIds.Tropical)).toBeTruthy()
})

test('getColorScheme function returns a value', () => {
  const colorScheme = getColorScheme(ColorSchemeIds.Tropical)

  expect(colorScheme).toBeDefined()
})
