import { InteractionIds } from 'harpstrata'

import type { Theme } from '../../Theme'

import type { HoleInteractionStyles, HoleInteractionStylesMap } from './types'

export const generateHoleInteractionStylesMap = (theme: Theme): HoleInteractionStylesMap => {
  const BLOW_COLOR_PRIMARY = '#FFEFE5' as const
  const BLOW_COLOR_SECONDARY = '#FFCB7C' as const
  const DRAW_COLOR_PRIMARY = '#D5E1F2' as const
  const DRAW_COLOR_SECONDARY = '#3C67A7' as const

  const { sizes } = theme

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
    [ InteractionIds.Blow ]: { ...BASE_STYLE, color: 'black', backgroundColor: BLOW_COLOR_PRIMARY },
    [ InteractionIds.Draw ]: { ...BASE_STYLE, color: 'black', backgroundColor: DRAW_COLOR_PRIMARY },
    [ InteractionIds.Bend1 ]: { ...BASE_STYLE, color: 'white', backgroundColor: DRAW_COLOR_SECONDARY },
    [ InteractionIds.Bend2 ]: { ...BASE_STYLE, color: 'white', backgroundColor: DRAW_COLOR_SECONDARY },
    [ InteractionIds.Bend3 ]: { ...BASE_STYLE, color: 'white', backgroundColor: DRAW_COLOR_SECONDARY },
    [ InteractionIds.BlowBend1 ]: { ...BASE_STYLE, color: 'white', backgroundColor: BLOW_COLOR_SECONDARY },
    [ InteractionIds.BlowBend2 ]: { ...BASE_STYLE, color: 'white', backgroundColor: BLOW_COLOR_SECONDARY },
    [ InteractionIds.OverDraw1 ]: { ...BASE_STYLE, color: 'white', backgroundColor: DRAW_COLOR_SECONDARY },
    [ InteractionIds.OverBlow1 ]: { ...BASE_STYLE, color: 'white', backgroundColor: BLOW_COLOR_SECONDARY },
    'undefined': BASE_STYLE,
  } as const

  return HOLE_INTERACTION_STYLES
}

export type { HoleInteractionStyles, HoleInteractionStylesMap } from './types'
