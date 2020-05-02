import type { ThemeColors } from '../../ThemeColors'

export enum ColorSchemeIds {
  Tropical = 'TROPICAL',
  Sixties = 'SIXTIES',
}

export type ColorScheme = ThemeColors & {
  readonly id: ColorSchemeIds;
}
