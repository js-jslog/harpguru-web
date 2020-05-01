type HoleInteractionStyle = {
  readonly color: string;
  readonly backgroundColor: string;
}
type HoleInteractionStyles = {
  readonly BLOW: HoleInteractionStyle;
  readonly DRAW: HoleInteractionStyle;
  readonly BEND1: HoleInteractionStyle;
  readonly BEND2: HoleInteractionStyle;
  readonly BEND3: HoleInteractionStyle;
  readonly BLOWBEND1: HoleInteractionStyle;
  readonly BLOWBEND2: HoleInteractionStyle;
  readonly OVERDRAW1: HoleInteractionStyle;
  readonly OVERBLOW1: HoleInteractionStyle;
}

export type HarpFaceStyles = {
  readonly holeInteractionStyles: HoleInteractionStyles;
}
