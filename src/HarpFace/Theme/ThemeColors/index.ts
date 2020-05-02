import type { ThemePrimer } from '../types'
import { getColorScheme } from '../colorSchemes'

import type { ThemeColors } from './types'

export const getThemeColors = (themePrimer: ThemePrimer): ThemeColors => {
  const { colorSchemeId } = themePrimer

  return getColorScheme(colorSchemeId)
}
export type { ThemeColors } from './types'
