import type { ColorSchemeIds } from '../colorSchemes'
import type { ThemeSizes } from '../ThemeSizes'
import type { ThemeColors } from '../ThemeColors'

export type ThemePrimer = {
  readonly seedSize?: number;
  readonly colorSchemeId?: ColorSchemeIds;
}

export type Theme = {
  readonly sizes: ThemeSizes;
  readonly colors: ThemeColors;
}
