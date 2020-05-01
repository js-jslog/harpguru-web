import type { HoleInteractionThemes } from '../HoleInteractionThemes'

export type ThemeProps = {
  readonly seedSize: number;
}

export type SizesMap = {
  readonly 1: number;
  readonly 2: number;
  readonly 3: number;
  readonly 4: number;
  readonly 5: number;
  readonly 6: number;
  readonly 7: number;
}

export type Theme = {
  readonly sizesMap: SizesMap;
  readonly holeInteractionThemes: HoleInteractionThemes;
}
