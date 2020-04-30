import type { Theme, ThemeProps, SizesMap } from './types'

const defaultThemeParams = { seedSize: 1 } as const
const BLOW_COLOR_PRIMARY = '#FFEFE5' as const
const BLOW_COLOR_SECONDARY = '#FFCB7C' as const
const DRAW_COLOR_PRIMARY = '#D5E1F2' as const
const DRAW_COLOR_SECONDARY = '#3C67A7' as const

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
  backgroundColors: {
    BLOW: BLOW_COLOR_PRIMARY,
    DRAW: DRAW_COLOR_PRIMARY,
    BEND1: DRAW_COLOR_SECONDARY,
    BEND2: DRAW_COLOR_SECONDARY,
    BEND3: DRAW_COLOR_SECONDARY,
    BLOWBEND1: BLOW_COLOR_SECONDARY,
    BLOWBEND2: BLOW_COLOR_SECONDARY,
    OVERDRAW1: DRAW_COLOR_SECONDARY,
    OVERBLOW1: BLOW_COLOR_SECONDARY,
  }
})
export type { Theme } from './types'
