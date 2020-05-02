import type { ColorScheme } from '../types'
import { ColorSchemeIds } from '../types'

const GRANITE_BLUE = '#3d405b' as const
const SAND = '#f2cc8f' as const
const MOSS = '#81b29a' as const
const ORANGE = '#e07a5f' as const
const PALE_YELLOW = '#f4f1de' as const
const BASIC_GREY = '#dddddd' as const

const blowBackgroundColor = GRANITE_BLUE
const blowBendBackgroundColor = SAND
const overBlowBackgroundColor = SAND
const drawBackgroundColor = MOSS
const bendBackgroundColor = ORANGE
const overDrawBackgroundColor = ORANGE

const blowColor = PALE_YELLOW
const blowBendColor = GRANITE_BLUE
const overBlowColor = GRANITE_BLUE
const drawColor = PALE_YELLOW
const bendColor = PALE_YELLOW
const overDrawColor = PALE_YELLOW

const holeShadowColor = BASIC_GREY

export const SIXTIES: ColorScheme = {
  id: ColorSchemeIds.Sixties,
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
