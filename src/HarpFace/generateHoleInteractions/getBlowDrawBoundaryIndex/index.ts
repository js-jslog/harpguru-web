import { InteractionIds } from 'harpstrata'
import type { InteractionMatrix, InteractionRow } from 'harpstrata'

type reducerState = [ number, boolean ]

const getBlowDrawBoundaryIndexRow = (reducedState: reducerState, interactionRow: InteractionRow): reducerState => {
  return interactionRow.reduce((reducedState, interaction): reducerState => {
    let [index, drawSeen ] = reducedState

    if (!drawSeen && interaction && interaction.id === InteractionIds.Draw) drawSeen = true
    if (!drawSeen) index +=1

    return [index, drawSeen]
  }, reducedState)
}

export const getBlowDrawBoundaryIndex = (interactionMatrix: InteractionMatrix): number => {
  const initialReducerState: reducerState = [0, false]

  const reducedMatrix = interactionMatrix.reduce((reducedState, interactionRow) => {
    return getBlowDrawBoundaryIndexRow(reducedState, interactionRow)
  }, initialReducerState)

  return reducedMatrix[0]
}
