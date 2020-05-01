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

type HoleInteractionTheme = {
  readonly color: string;
  readonly backgroundColor: string;
}
type HoleInteractionThemes = {
  readonly BLOW: HoleInteractionTheme;
  readonly DRAW: HoleInteractionTheme;
  readonly BEND1: HoleInteractionTheme;
  readonly BEND2: HoleInteractionTheme;
  readonly BEND3: HoleInteractionTheme;
  readonly BLOWBEND1: HoleInteractionTheme;
  readonly BLOWBEND2: HoleInteractionTheme;
  readonly OVERDRAW1: HoleInteractionTheme;
  readonly OVERBLOW1: HoleInteractionTheme;
}

export type Theme = {
  readonly sizesMap: SizesMap;
  readonly holeInteractionThemes: HoleInteractionThemes;
}
