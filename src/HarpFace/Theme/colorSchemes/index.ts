import { TROPICAL } from './constants/TROPICAL'
import { SIXTIES } from './constants/SIXTIES'

import { ColorSchemeIds } from './types'
import type { ColorScheme } from './types'

const colorSchemeMap = new Map()
colorSchemeMap.set(TROPICAL.id, TROPICAL)
colorSchemeMap.set(SIXTIES.id, SIXTIES)

export const getActiveColorSchemeIds = (): ColorSchemeIds[] => Array.from(colorSchemeMap.keys())
export const getColorScheme = (colorSchemeId: ColorSchemeIds): ColorScheme => colorSchemeMap.get(colorSchemeId)

export { ColorSchemeIds } from './types'
