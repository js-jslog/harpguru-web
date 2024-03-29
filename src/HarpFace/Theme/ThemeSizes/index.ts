import type { ThemePrimer } from '../types'

import type { ThemeSizes } from './types'

export const getThemeSizes = (themePrimer: ThemePrimer): ThemeSizes => {
  const { seedSize } = themePrimer
  return {
    1: seedSize *1,
    2: seedSize *1.618,
    3: seedSize *2.618,
    4: seedSize *4.236,
    5: seedSize *6.854,
    6: seedSize *11.090,
    7: seedSize *17.944,
    8: seedSize *29.034,
    9: seedSize *46.979,
    10: seedSize *76.013,
  } as const
}
export type { ThemeSizes } from './types'
