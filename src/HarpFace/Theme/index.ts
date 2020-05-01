import { HOLE_INTERACTION_THEMES } from './HoleInteractionThemes'

import type { Theme, ThemeProps, SizesMap } from './types'

const defaultThemeParams = { seedSize: 1 } as const

const getSizesMap = (themeProps: ThemeProps): SizesMap => {
  const { seedSize } = themeProps
  return {
    1: seedSize *1,
    2: seedSize *2,
    3: seedSize *4,
    4: seedSize *8,
    5: seedSize *16,
    6: seedSize *32,
    7: seedSize *64,
  } as const
}

export const getTheme = (themeProps: ThemeProps = defaultThemeParams): Theme => ({
  sizesMap: getSizesMap(themeProps),
  holeInteractionThemes: HOLE_INTERACTION_THEMES,
})
export type { Theme } from './types'
