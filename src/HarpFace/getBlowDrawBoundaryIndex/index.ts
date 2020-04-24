import { InteractionIds } from 'harpstrata'
import type { InteractionMatrix, InteractionRow, Interaction } from 'harpstrata'

export const getBlowDrawBoundaryIndexRow = (indexTupleInput: [number, boolean], interactionRow: InteractionRow): [number, boolean] => {
  return interactionRow.reduce((indexTuple: [number, boolean], interaction: Interaction | undefined): [number, boolean] => {
    let [index, drawSeen ] = indexTuple
    if (!drawSeen && interaction && interaction.id === InteractionIds.Draw) drawSeen = true
    if (!drawSeen && interaction && interaction.id !== InteractionIds.Draw) index +=1
    return [index, drawSeen]
  }, indexTupleInput)
}

export const getBlowDrawBoundaryIndex = (indexTupleInput: [number, boolean], interactionMatrix: InteractionMatrix): [number, boolean] => {
  return interactionMatrix.reduce((indexTupleInput, interactionRow) => {
    return getBlowDrawBoundaryIndexRow(indexTupleInput, interactionRow)
  }, indexTupleInput)
}
