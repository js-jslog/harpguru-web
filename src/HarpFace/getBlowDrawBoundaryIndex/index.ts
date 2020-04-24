import { InteractionIds } from 'harpstrata'
import type { InteractionMatrix } from 'harpstrata'

export const getBlowDrawBoundaryIndex = (interactionMatrix: InteractionMatrix): number => {
  return interactionMatrix.reduce((index, interactionRow) => {
    const reducedRow = interactionRow.reduce((index, interaction) => {
      if (interaction && interaction.id !== InteractionIds.Draw) return index + 1
      return index
    }, 0)
    return index + reducedRow
  }, 0)
}
