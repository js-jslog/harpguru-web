import { InteractionIds } from 'harpstrata'
import type { InteractionMatrix, InteractionRow } from 'harpstrata'

type reducerState = [ number, boolean ]

const getBlowDrawBoundaryIndexRow = (indexTupleInput: reducerState, interactionRow: InteractionRow): reducerState => {
  return interactionRow.reduce((indexTuple, interaction): reducerState => {
    let [index, drawSeen ] = indexTuple
    if (!drawSeen && interaction && interaction.id === InteractionIds.Draw) drawSeen = true
    if (!drawSeen && interaction && interaction.id !== InteractionIds.Draw) index +=1
    return [index, drawSeen]
  }, indexTupleInput)
}

export const getBlowDrawBoundaryIndex = (interactionMatrix: InteractionMatrix): number => {
  const initialReducerState: reducerState = [0, false]
  const reducedMatrix = interactionMatrix.reduce((indexTuple, interactionRow) => {
    return getBlowDrawBoundaryIndexRow(indexTuple, interactionRow)
  }, initialReducerState)
  return reducedMatrix[0]
}
