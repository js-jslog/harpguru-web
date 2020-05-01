import type { ThemeColors } from '../index'

const BLOWHOLE_BACKGROUNDCOLOR_1 = '#264653' as const
const BLOWHOLE_BACKGROUNDCOLOR_2 = '#f4a261' as const
const DRAWHOLE_BACKGROUNDCOLOR_1 = '#2a9d8f' as const
const DRAWHOLE_BACKGROUNDCOLOR_2 = '#e76f51' as const

const BLOWHOLE_COLOR_1 = '#fff' as const
const BLOWHOLE_COLOR_2 = '#264653' as const
const DRAWHOLE_COLOR_1 = '#fff' as const
const DRAWHOLE_COLOR_2 = '#264653' as const

const HOLE_SHADOW_COLOR = '#DDD' as const

export const TROPICAL: ThemeColors = {
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
