import type { PositionFacts } from '../analysePosition'
import type { HarpFaceProps, YXCoord } from '../../HarpFace'

export type HoleInteractionProps = HarpFaceProps & {
  readonly yxCoord: YXCoord;
}
export type UseStylesProps = HoleInteractionProps & {
  readonly positionFacts: PositionFacts;
}
