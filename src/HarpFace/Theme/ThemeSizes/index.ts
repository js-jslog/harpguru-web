import type { ThemePrimer } from '../types'

import type { ThemeSizes } from './types'

export const getThemeSizes = (themeProps: ThemePrimer): ThemeSizes => {
  const { seedSize = 1 } = themeProps
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
export type { ThemeSizes } from './types'
