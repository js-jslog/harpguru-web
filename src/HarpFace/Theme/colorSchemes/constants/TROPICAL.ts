import type { ColorScheme } from '../types'
import { ColorSchemeIds } from '../types'

const DEEP_SEA_BLUE = '#264653' as const
const PEACH = '#f4a261' as const
const TEAL = '#2a9d8f' as const
const ORANGE = '#e76f51' as const
const WHITE = '#ffffff' as const
const BASIC_GREY = '#dddddd' as const

const BLOWHOLE_BACKGROUNDCOLOR_1 = DEEP_SEA_BLUE
const BLOWHOLE_BACKGROUNDCOLOR_2 = PEACH
const DRAWHOLE_BACKGROUNDCOLOR_1 = TEAL
const DRAWHOLE_BACKGROUNDCOLOR_2 = ORANGE

const BLOWHOLE_COLOR_1 = WHITE
const BLOWHOLE_COLOR_2 = DEEP_SEA_BLUE
const DRAWHOLE_COLOR_1 = WHITE
const DRAWHOLE_COLOR_2 = DEEP_SEA_BLUE

const HOLE_SHADOW_COLOR = BASIC_GREY

export const TROPICAL: ColorScheme = {
  id: ColorSchemeIds.Tropical,
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
