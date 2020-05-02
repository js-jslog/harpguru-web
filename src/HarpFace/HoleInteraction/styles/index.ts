import { InteractionIds } from 'harpstrata'

import type { Theme } from '../../Theme'

import type { HoleInteractionStyles, HoleInteractionStylesMap } from './types'

export const generateHoleInteractionStylesMap = (theme: Theme): HoleInteractionStylesMap => {
  const { sizes, colors } = theme

  const borderRadius = `${sizes[6]}px`
  const backgroundColor = 'transparent'
  const boxShadow = `0 ${sizes[4]}px ${sizes[4]}px #ddd`
  const color = 'transparent'
  const fontSize = `${sizes[8]}px`
  const height = `${sizes[9]}px`
  const marginTop = `${sizes[6]}px`
  const marginBottom = `${sizes[6]}px`
  const visibility = 'visible'
  const width = `${sizes[9]}px`

  const baseStyles: HoleInteractionStyles = {
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

  const blowStyles = { ...baseStyles, color: colors.blowHoleColor1 , backgroundColor: colors.blowHoleBackgroundColor1 }
  const drawStyles = { ...baseStyles, color: colors.drawHoleColor1 , backgroundColor: colors.drawHoleBackgroundColor1 }
  const bendStyles = { ...baseStyles, color: colors.drawHoleColor2 , backgroundColor: colors.drawHoleBackgroundColor2 }
  const blowBendStyles = { ...baseStyles, color: colors.blowHoleColor2 , backgroundColor: colors.blowHoleBackgroundColor2 }
  const overDrawStyles = { ...baseStyles, color: colors.blowHoleColor2 , backgroundColor: colors.blowHoleBackgroundColor2 }
  const overBlowStyles = { ...baseStyles, color: colors.blowHoleColor2 , backgroundColor: colors.blowHoleBackgroundColor2 }

  const HOLE_INTERACTION_STYLES = {
    [ InteractionIds.Blow ]: blowStyles,
    [ InteractionIds.Draw ]: drawStyles,
    [ InteractionIds.Bend1 ]: bendStyles,
    [ InteractionIds.Bend2 ]: bendStyles,
    [ InteractionIds.Bend3 ]: bendStyles,
    [ InteractionIds.BlowBend1 ]: blowBendStyles,
    [ InteractionIds.BlowBend2 ]: blowBendStyles,
    [ InteractionIds.OverDraw1 ]: overDrawStyles,
    [ InteractionIds.OverBlow1 ]: overBlowStyles,
    'undefined': baseStyles,
  } as const

  return HOLE_INTERACTION_STYLES
}

export type { HoleInteractionStyles, HoleInteractionStylesMap } from './types'
