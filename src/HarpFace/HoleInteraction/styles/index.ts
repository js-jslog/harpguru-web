import { InteractionIds } from 'harpstrata'

import type { HoleInteractionStyles } from './types'

export const generateHoleInteractionStyles = (): HoleInteractionStyles => {
  const BLOW_COLOR_PRIMARY = '#FFEFE5' as const
  const BLOW_COLOR_SECONDARY = '#FFCB7C' as const
  const DRAW_COLOR_PRIMARY = '#D5E1F2' as const
  const DRAW_COLOR_SECONDARY = '#3C67A7' as const

  const HOLE_INTERACTION_STYLES = {
    [ InteractionIds.Blow ]: { color: 'black', backgroundColor: BLOW_COLOR_PRIMARY },
    [ InteractionIds.Draw ]: { color: 'black', backgroundColor: DRAW_COLOR_PRIMARY },
    [ InteractionIds.Bend1 ]: { color: 'white', backgroundColor: DRAW_COLOR_SECONDARY },
    [ InteractionIds.Bend2 ]: { color: 'white', backgroundColor: DRAW_COLOR_SECONDARY },
    [ InteractionIds.Bend3 ]: { color: 'white', backgroundColor: DRAW_COLOR_SECONDARY },
    [ InteractionIds.BlowBend1 ]: { color: 'white', backgroundColor: BLOW_COLOR_SECONDARY },
    [ InteractionIds.BlowBend2 ]: { color: 'white', backgroundColor: BLOW_COLOR_SECONDARY },
    [ InteractionIds.OverDraw1 ]: { color: 'white', backgroundColor: DRAW_COLOR_SECONDARY },
    [ InteractionIds.OverBlow1 ]: { color: 'white', backgroundColor: BLOW_COLOR_SECONDARY },
  } as const

  return HOLE_INTERACTION_STYLES
}

export type { HoleInteractionStyles } from './types'
