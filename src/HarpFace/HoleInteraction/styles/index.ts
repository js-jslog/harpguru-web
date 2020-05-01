import { InteractionIds } from 'harpstrata'

import type { Theme } from '../../Theme'

import type { HoleInteractionStyles, HoleInteractionStylesMap } from './types'

export const generateHoleInteractionStylesMap = (theme: Theme): HoleInteractionStylesMap => {
  const { sizes, colors } = theme

  const borderRadius = `${sizes[4]}px`
  const backgroundColor = 'transparent'
  const boxShadow = `0 ${sizes[3]}px ${sizes[3]}px #ddd`
  const color = 'transparent'
  const fontSize = `${sizes[5]}px`
  const height = `${sizes[6]}px`
  const marginTop = `${sizes[4]}px`
  const marginBottom = `${sizes[4]}px`
  const visibility = 'visible'
  const width = `${sizes[6]}px`

  const BASE_STYLE: HoleInteractionStyles = {
    borderRadius,
    backgroundColor,
    boxShadow,
    color,
    fontSize,
    height,
    marginTop,
    marginBottom,
    visibility,
    width,
  }

  const HOLE_INTERACTION_STYLES = {
    [ InteractionIds.Blow ]: { ...BASE_STYLE, color: colors.blowHoleColor1 , backgroundColor: colors.blowHoleBackgroundColor1 },
    [ InteractionIds.Draw ]: { ...BASE_STYLE, color: colors.drawHoleColor1 , backgroundColor: colors.drawHoleBackgroundColor1 },
    [ InteractionIds.Bend1 ]: { ...BASE_STYLE, color: colors.drawHoleColor2 , backgroundColor: colors.drawHoleBackgroundColor2 },
    [ InteractionIds.Bend2 ]: { ...BASE_STYLE, color: colors.drawHoleColor2 , backgroundColor: colors.drawHoleBackgroundColor2 },
    [ InteractionIds.Bend3 ]: { ...BASE_STYLE, color: colors.drawHoleColor2 , backgroundColor: colors.drawHoleBackgroundColor2 },
    [ InteractionIds.BlowBend1 ]: { ...BASE_STYLE, color: colors.blowHoleColor2 , backgroundColor: colors.blowHoleBackgroundColor2 },
    [ InteractionIds.BlowBend2 ]: { ...BASE_STYLE, color: colors.blowHoleColor2 , backgroundColor: colors.blowHoleBackgroundColor2 },
    [ InteractionIds.OverDraw1 ]: { ...BASE_STYLE, color: colors.blowHoleColor2 , backgroundColor: colors.blowHoleBackgroundColor2 },
    [ InteractionIds.OverBlow1 ]: { ...BASE_STYLE, color: colors.blowHoleColor2 , backgroundColor: colors.blowHoleBackgroundColor2 },
    'undefined': BASE_STYLE,
  } as const

  return HOLE_INTERACTION_STYLES
}

export type { HoleInteractionStyles, HoleInteractionStylesMap } from './types'
