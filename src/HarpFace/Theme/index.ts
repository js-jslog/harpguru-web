import { getThemeSizes } from './ThemeSizes'
import { getThemeColors } from './ThemeColors'
import { getActiveColorSchemeIds } from './ColorScheme'

import type { Theme, ThemePrimer } from './types'

const [ defaultColorSchemeId ] = getActiveColorSchemeIds()
const defaultThemePrimer = { seedSize: 1, colorSchemeId: defaultColorSchemeId }
export const getTheme = (themePrimer: ThemePrimer = defaultThemePrimer): Theme => ({
  sizes: getThemeSizes(themePrimer),
  colors: getThemeColors(themePrimer),
})
export type { Theme, ThemePrimer } from './types'
export type { ThemeColors } from './ThemeColors'
