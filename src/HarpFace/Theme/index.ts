import { getSizesMap } from './SizesMap'

import type { Theme, ThemePrimer } from './types'

const defaultThemeParams = { seedSize: 1 } as const

export const getTheme = (themePrimer: ThemePrimer = defaultThemeParams): Theme => ({
  sizesMap: getSizesMap(themePrimer),
})
export type { Theme } from './types'
