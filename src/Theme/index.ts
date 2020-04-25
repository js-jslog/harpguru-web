import type { Theme, ThemeProps, SizesMap } from './types'
export type { Theme, ThemeProps, SizesMap } from './types'

const getSizesMap = (themeProps: ThemeProps): SizesMap => {
  const { seedSize } = themeProps
  return {
    1: seedSize *1,
    2: seedSize *2,
    3: seedSize *3,
    4: seedSize *4,
    5: seedSize *5,
    6: seedSize *6,
    7: seedSize *7,
  } as const
}

export const getTheme = (themeProps: ThemeProps): Theme => ({
  sizesMap: getSizesMap(themeProps),
})
