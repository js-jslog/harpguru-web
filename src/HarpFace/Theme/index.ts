import { InteractionIds } from 'harpstrata'

import type { Theme, ThemeProps, SizesMap } from './types'

const defaultThemeParams = { seedSize: 1 } as const
const BLOW_COLOR_PRIMARY = '#FFEFE5' as const
const BLOW_COLOR_SECONDARY = '#FFCB7C' as const
const DRAW_COLOR_PRIMARY = '#D5E1F2' as const
const DRAW_COLOR_SECONDARY = '#3C67A7' as const

const getSizesMap = (themeProps: ThemeProps): SizesMap => {
  const { seedSize } = themeProps
  return {
    1: seedSize *1,
    2: seedSize *2,
    3: seedSize *4,
    4: seedSize *8,
    5: seedSize *16,
    6: seedSize *32,
    7: seedSize *64,
  } as const
}

export const getTheme = (themeProps: ThemeProps = defaultThemeParams): Theme => ({
  sizesMap: getSizesMap(themeProps),
  holeInteractionThemes: {
    [ InteractionIds.Blow ]: { color: 'black', backgroundColor: BLOW_COLOR_PRIMARY },
    [ InteractionIds.Draw ]: { color: 'black', backgroundColor: DRAW_COLOR_PRIMARY },
    [ InteractionIds.Bend1 ]: { color: 'white', backgroundColor: DRAW_COLOR_SECONDARY },
    [ InteractionIds.Bend2 ]: { color: 'white', backgroundColor: DRAW_COLOR_SECONDARY },
    [ InteractionIds.Bend3 ]: { color: 'white', backgroundColor: DRAW_COLOR_SECONDARY },
    [ InteractionIds.BlowBend1 ]: { color: 'white', backgroundColor: BLOW_COLOR_SECONDARY },
    [ InteractionIds.BlowBend2 ]: { color: 'white', backgroundColor: BLOW_COLOR_SECONDARY },
    [ InteractionIds.OverDraw1 ]: { color: 'white', backgroundColor: DRAW_COLOR_SECONDARY },
    [ InteractionIds.OverBlow1 ]: { color: 'white', backgroundColor: BLOW_COLOR_SECONDARY },
  },
})
export type { Theme } from './types'
