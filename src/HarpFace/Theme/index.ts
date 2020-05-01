import { getSizesMap } from './SizesMap'

import type { Theme, ThemeProps } from './types'

const defaultThemeParams = { seedSize: 1 } as const

export const getTheme = (themeProps: ThemeProps = defaultThemeParams): Theme => ({
  sizesMap: getSizesMap(themeProps),
})
export type { Theme } from './types'
