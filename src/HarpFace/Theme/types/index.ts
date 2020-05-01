import type { SizesMap } from '../SizesMap'
import type { HoleInteractionThemes } from '../HoleInteractionThemes'

export type ThemeProps = {
  readonly seedSize: number;
}

export type Theme = {
  readonly sizesMap: SizesMap;
  readonly holeInteractionThemes: HoleInteractionThemes;
}
