import type { ThemeColors } from '../../index'

export enum ColorSchemeIds {
  Tropical = 'TROPICAL',
  Sixties = 'SIXTIES',
}

export type ColorScheme = ThemeColors & {
  readonly id: ColorSchemeIds;
}
