import { InteractionIds } from 'harpstrata'
import type { InteractionMatrix, InteractionRow } from 'harpstrata'

export const getBlowDrawBoundaryIndex = (interactionMatrix: InteractionMatrix): number => {
  return interactionMatrix.reduce((index, interactionRow) => {
    const reducedRow = interactionRow.reduce((index, interaction) => {
      if (interaction && interaction.id !== InteractionIds.Draw) return index + 1
      return index
    }, 0)
    return index + reducedRow
  }, 0)
}

export const getBlowDrawBoundaryIndexRow = (interactionRow: InteractionRow): number => {
  return interactionRow.reduce((index, interaction) => {
    if (interaction && interaction.id !== InteractionIds.Draw) return index + 1
    return index
  }, 0)
}
