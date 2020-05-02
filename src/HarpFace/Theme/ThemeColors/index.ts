import type { ThemePrimer } from '../types'
import { getColorScheme } from '../colorSchemes'

import type { ThemeColors } from './types'

const BLOWHOLE_BACKGROUNDCOLOR_1 = '#FFEFE5' as const
const BLOWHOLE_BACKGROUNDCOLOR_2 = '#FFCB7C' as const
const DRAWHOLE_BACKGROUNDCOLOR_1 = '#D5E1F2' as const
const DRAWHOLE_BACKGROUNDCOLOR_2 = '#3C67A7' as const

const BLOWHOLE_COLOR_1 = '#333' as const
const BLOWHOLE_COLOR_2 = '#FFF' as const
const DRAWHOLE_COLOR_1 = '#333' as const
const DRAWHOLE_COLOR_2 = '#FFF' as const

const HOLE_SHADOW_COLOR = '#DDD' as const

export const getThemeColors = (themeProps: ThemePrimer): ThemeColors => {
  const DEFAULT_THEMECOLORS = {
    blowHoleBackgroundColor1: BLOWHOLE_BACKGROUNDCOLOR_1,
    blowHoleBackgroundColor2: BLOWHOLE_BACKGROUNDCOLOR_2,
    drawHoleBackgroundColor1: DRAWHOLE_BACKGROUNDCOLOR_1,
    drawHoleBackgroundColor2: DRAWHOLE_BACKGROUNDCOLOR_2,
    blowHoleColor1: BLOWHOLE_COLOR_1,
    blowHoleColor2: BLOWHOLE_COLOR_2,
    drawHoleColor1: DRAWHOLE_COLOR_1,
    drawHoleColor2: DRAWHOLE_COLOR_2,
    holeShadowColor: HOLE_SHADOW_COLOR,
  } as const

  const { colorSchemeId } = themeProps
  const colors = (colorSchemeId ? getColorScheme(colorSchemeId) : {})

  return { ...DEFAULT_THEMECOLORS, ...colors }
}
export type { ThemeColors } from './types'
