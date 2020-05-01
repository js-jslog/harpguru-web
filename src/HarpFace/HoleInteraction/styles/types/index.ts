export type HoleInteractionStyle = {
  readonly borderRadius: string;
  readonly backgroundColor: string;
  readonly boxShadow: string;
  readonly color: string;
  readonly fontSize: string;
  readonly height: string;
  readonly marginTop: string;
  readonly marginBottom: string;
  readonly visibility: string;
  readonly width: string;
}

export type HoleInteractionStyles = {
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
