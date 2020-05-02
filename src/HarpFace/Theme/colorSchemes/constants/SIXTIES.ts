import type { ColorScheme } from '../types'
import { ColorSchemeIds } from '../types'

const BLOWHOLE_BACKGROUNDCOLOR_1 = '#3d405b' as const
const BLOWHOLE_BACKGROUNDCOLOR_2 = '#f2cc8f' as const
const DRAWHOLE_BACKGROUNDCOLOR_1 = '#81b29a' as const
const DRAWHOLE_BACKGROUNDCOLOR_2 = '#e07a5f' as const

const BLOWHOLE_COLOR_1 = '#f4f1de' as const
const BLOWHOLE_COLOR_2 = '#3d405b' as const
const DRAWHOLE_COLOR_1 = '#f4f1de' as const
const DRAWHOLE_COLOR_2 = '#f4f1de' as const

const HOLE_SHADOW_COLOR = '#DDD' as const

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
