import { getSizesMap } from './SizesMap'
import { HOLE_INTERACTION_THEMES } from './HoleInteractionThemes'

import type { Theme, ThemeProps } from './types'

const defaultThemeParams = { seedSize: 1 } as const

export const getTheme = (themeProps: ThemeProps = defaultThemeParams): Theme => ({
  sizesMap: getSizesMap(themeProps),
  holeInteractionThemes: HOLE_INTERACTION_THEMES,
})
export type { Theme } from './types'
