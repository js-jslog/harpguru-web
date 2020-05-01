import type { HoleNumberStyle } from '../styles'
import type { Theme } from '../../index'

export type HoleNumberProps = {
  readonly xCoord: number;
  readonly theme: Theme;
  readonly styles: HoleNumberStyle;
}
