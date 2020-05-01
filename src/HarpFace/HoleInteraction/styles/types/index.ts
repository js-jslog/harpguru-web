export type HoleInteractionStyles = {
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

export type HoleInteractionStylesMap = {
  readonly BLOW: HoleInteractionStyles;
  readonly DRAW: HoleInteractionStyles;
  readonly BEND1: HoleInteractionStyles;
  readonly BEND2: HoleInteractionStyles;
  readonly BEND3: HoleInteractionStyles;
  readonly BLOWBEND1: HoleInteractionStyles;
  readonly BLOWBEND2: HoleInteractionStyles;
  readonly OVERDRAW1: HoleInteractionStyles;
  readonly OVERBLOW1: HoleInteractionStyles;
  readonly undefined: HoleInteractionStyles;
}
