import type { Theme, ThemeProps, SizesMap } from './types'

const defaultTheme = { seedSize: 1 }

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

export const getTheme = (themeProps: ThemeProps = defaultTheme): Theme => ({
  sizesMap: getSizesMap(themeProps),
})
export type { Theme } from './types'
