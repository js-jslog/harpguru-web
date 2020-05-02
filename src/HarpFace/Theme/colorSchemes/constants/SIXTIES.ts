import type { ColorScheme } from '../types'
import { ColorSchemeIds } from '../types'

const GRANITE_BLUE = '#3d405b' as const
const SAND = '#f2cc8f' as const
const MOSS = '#81b29a' as const
const ORANGE = '#e07a5f' as const
const PALE_YELLOW = '#f4f1de' as const
const BASIC_GREY = '#dddddd' as const

const BLOWHOLE_BACKGROUNDCOLOR_1 = GRANITE_BLUE
const BLOWHOLE_BACKGROUNDCOLOR_2 = SAND
const DRAWHOLE_BACKGROUNDCOLOR_1 = MOSS
const DRAWHOLE_BACKGROUNDCOLOR_2 = ORANGE

const BLOWHOLE_COLOR_1 = PALE_YELLOW
const BLOWHOLE_COLOR_2 = GRANITE_BLUE
const DRAWHOLE_COLOR_1 = PALE_YELLOW
const DRAWHOLE_COLOR_2 = PALE_YELLOW

const HOLE_SHADOW_COLOR = BASIC_GREY

export const SIXTIES: ColorScheme = {
  id: ColorSchemeIds.Sixties,
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
