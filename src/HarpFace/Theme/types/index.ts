import type { ThemeSizes } from '../ThemeSizes'
import type { ThemeColors } from '../ThemeColors'

type ThemeColorsPrimer = {
  readonly blowHoleBackgroundColor1?: string;
  readonly blowHoleBackgroundColor2?: string;
  readonly drawHoleBackgroundColor1?: string;
  readonly drawHoleBackgroundColor2?: string;
  readonly blowHoleColor1?: string;
  readonly blowHoleColor2?: string;
  readonly drawHoleColor1?: string;
  readonly drawHoleColor2?: string;
  readonly holeShadowColor?: string;
}

export type ThemePrimer = {
  readonly seedSize?: number;
  readonly colors?: ThemeColorsPrimer;
}

export type Theme = {
  readonly sizes: ThemeSizes;
  readonly colors: ThemeColors;
}
