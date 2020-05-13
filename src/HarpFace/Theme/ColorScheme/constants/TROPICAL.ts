import type { ColorScheme } from '../types'
import { ColorSchemeIds } from '../types'

const DEEP_SEA_BLUE = '#264653' as const
const SUNSHINE = '#f4a261' as const
const TEAL = '#2a9d8f' as const
const BLOOD_ORANGE = '#e76f51' as const
const WHITE = '#ffffff' as const
const BASIC_GREY = '#dddddd' as const

const blowBackgroundColor = DEEP_SEA_BLUE
const blowBendBackgroundColor = SUNSHINE
const overBlowBackgroundColor = BLOOD_ORANGE
const drawBackgroundColor = TEAL
const bendBackgroundColor = SUNSHINE
const overDrawBackgroundColor = BLOOD_ORANGE

const blowColor = WHITE
const blowBendColor = DEEP_SEA_BLUE
const overBlowColor = DEEP_SEA_BLUE
const drawColor = WHITE
const bendColor = DEEP_SEA_BLUE
const overDrawColor = DEEP_SEA_BLUE

const holeShadowColor = BASIC_GREY

export const TROPICAL: ColorScheme = {
  id: ColorSchemeIds.Tropical,
  blowBackgroundColor,
  blowBendBackgroundColor,
  overBlowBackgroundColor,
  drawBackgroundColor,
  bendBackgroundColor,
  overDrawBackgroundColor,
  blowColor,
  blowBendColor,
  overBlowColor,
  drawColor,
  bendColor,
  overDrawColor,
  holeShadowColor,
} as const
