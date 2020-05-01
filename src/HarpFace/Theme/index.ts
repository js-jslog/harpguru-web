import { getThemeSizes } from './ThemeSizes'

import type { Theme, ThemePrimer } from './types'

const defaultThemeParams = { seedSize: 1 } as const

export const getTheme = (themePrimer: ThemePrimer = defaultThemeParams): Theme => ({
  sizes: getThemeSizes(themePrimer),
})
export type { Theme } from './types'
