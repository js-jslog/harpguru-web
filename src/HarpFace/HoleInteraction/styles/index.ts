import { InteractionIds } from 'harpstrata'

import type { Theme } from '../../Theme'

import type { HoleInteractionStyle, HoleInteractionStyles } from './types'

export const generateHoleInteractionStyles = (theme: Theme): HoleInteractionStyles => {
  const BLOW_COLOR_PRIMARY = '#FFEFE5' as const
  const BLOW_COLOR_SECONDARY = '#FFCB7C' as const
  const DRAW_COLOR_PRIMARY = '#D5E1F2' as const
  const DRAW_COLOR_SECONDARY = '#3C67A7' as const

  const { sizesMap } = theme

  const borderRadius = `${sizesMap[4]}px`
  const backgroundColor = 'transparent'
  const boxShadow = `0 ${sizesMap[3]}px ${sizesMap[3]}px #ddd`
  const color = 'transparent'
  const fontSize = `${sizesMap[5]}px`
  const height = `${sizesMap[6]}px`
  const marginTop = `${sizesMap[4]}px`
  const marginBottom = `${sizesMap[4]}px`
  const visibility = 'visible'
  const width = `${sizesMap[6]}px`

  const BASE_STYLE: HoleInteractionStyle = {
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
  } as const

  return HOLE_INTERACTION_STYLES
}

export type { HoleInteractionStyle, HoleInteractionStyles } from './types'
