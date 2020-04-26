import type { HarpFaceProps, YXCoord } from '../../index'

export type HoleInteractionProps = HarpFaceProps & {
  readonly yxCoord: YXCoord;
}
