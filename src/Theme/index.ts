import type { Theme, ThemeProps, SizesMap } from './types'
export type { Theme, ThemeProps, SizesMap } from './types'

const defaultTheme = { seedSize: 1 }

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

export const getTheme = (themeProps: ThemeProps = defaultTheme): Theme => ({
  sizesMap: getSizesMap(themeProps),
})
