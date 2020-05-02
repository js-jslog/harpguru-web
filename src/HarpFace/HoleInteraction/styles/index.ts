import { InteractionIds } from 'harpstrata'

import type { Theme } from '../../Theme'

import type { HoleInteractionStyles, HoleInteractionStylesMap } from './types'

export const generateHoleInteractionStylesMap = (theme: Theme): HoleInteractionStylesMap => {
  const { sizes, colors } = theme
  const {
    blowBackgroundColor,
    drawBackgroundColor,
    bendBackgroundColor,
    blowBendBackgroundColor,
    overDrawBackgroundColor,
    overBlowBackgroundColor,
    blowColor,
    drawColor,
    bendColor,
    blowBendColor,
    overDrawColor,
    overBlowColor,
    holeShadowColor,
  } = colors

  const borderRadius = `${sizes[6]}px`
  const backgroundColor = 'transparent'
  const boxShadow = `0 ${sizes[4]}px ${sizes[4]}px ${holeShadowColor}`
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

  const blowStyles = { ...baseStyles, color: blowColor , backgroundColor: blowBackgroundColor }
  const drawStyles = { ...baseStyles, color: drawColor, backgroundColor: drawBackgroundColor }
  const bendStyles = { ...baseStyles, color: bendColor, backgroundColor: bendBackgroundColor }
  const blowBendStyles = { ...baseStyles, color: blowBendColor, backgroundColor: blowBendBackgroundColor }
  const overDrawStyles = { ...baseStyles, color: overDrawColor, backgroundColor: overDrawBackgroundColor }
  const overBlowStyles = { ...baseStyles, color: overBlowColor, backgroundColor: overBlowBackgroundColor }

  const holeInteractionStyles = {
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

  return holeInteractionStyles
}

export type { HoleInteractionStyles, HoleInteractionStylesMap } from './types'
