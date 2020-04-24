import { InteractionIds } from 'harpstrata'
import type { InteractionMatrix, InteractionRow, Interaction } from 'harpstrata'

export const getBlowDrawBoundaryIndex = (interactionMatrix: InteractionMatrix): number => {
  return interactionMatrix.reduce((index, interactionRow) => {
    const reducedRow = interactionRow.reduce((index, interaction) => {
      if (interaction && interaction.id !== InteractionIds.Draw) return index + 1
      return index
    }, 0)
    return index + reducedRow
  }, 0)
}

export const getBlowDrawBoundaryIndexRow = (indexTupleInput: [number, boolean], interactionRow: InteractionRow): [number, boolean] => {
  return interactionRow.reduce((indexTuple: [number, boolean], interaction: Interaction | undefined): [number, boolean] => {
    let [index, drawSeen ] = indexTuple
    if (!drawSeen && interaction && interaction.id === InteractionIds.Draw) drawSeen = true
    if (!drawSeen && interaction && interaction.id !== InteractionIds.Draw) index +=1
    return [index, drawSeen]
  }, indexTupleInput)
}
