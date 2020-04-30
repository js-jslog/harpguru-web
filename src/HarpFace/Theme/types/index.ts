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

type BackgroundColor = {
  readonly BLOW: string;
  readonly DRAW: string;
  readonly BEND1: string;
  readonly BEND2: string;
  readonly BEND3: string;
  readonly BLOWBEND1: string;
  readonly BLOWBEND2: string;
  readonly OVERDRAW1: string;
  readonly OVERBLOW1: string;
}

export type Theme = {
  readonly sizesMap: SizesMap;
  readonly backgroundColors: BackgroundColor;
}
