import { getThemeSizes } from './ThemeSizes'
import { getThemeColors } from './ThemeColors'

import type { Theme, ThemePrimer } from './types'

export const getTheme = (themePrimer: ThemePrimer = {}): Theme => ({
  sizes: getThemeSizes(themePrimer),
  colors: getThemeColors(themePrimer),
})
export type { Theme } from './types'
