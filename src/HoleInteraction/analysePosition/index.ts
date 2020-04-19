interface PositionAnalysis {
  readonly occupiedLeft: boolean;
}

export const analysePosition = (): PositionAnalysis => {
  return {
    occupiedLeft: true
  }
}
