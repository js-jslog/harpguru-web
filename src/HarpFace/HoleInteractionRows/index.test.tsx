import React from 'react'
import { getApparatusIds, getPozitionIds, getHarpStrata, InteractionMatrix, InteractionIds } from 'harpstrata'
import { render } from '@testing-library/react'

import type { HarpFaceProps } from '../index'
import { getTheme } from '../index'

import { HoleInteractionRowsTop } from './HoleInteractionRowsTop'
import { HoleInteractionRowsBottom } from './HoleInteractionRowsBottom'

const harpStrata = getHarpStrata(getApparatusIds()[0], getPozitionIds()[0])
const theme = getTheme()
const harpFaceProps: HarpFaceProps = {
  harpStrata,
  theme,
}

const getBlowInteractionRowIndex = (interactionMatrix: InteractionMatrix): number => {
  // This reducer assumes that there is a Blow row somewhere in the matrix
  // If there isn't then this isn't going to function
  const blowInteractionRow = interactionMatrix.reduce((blowRow, thisRow) => {
    const [ interaction ] = thisRow
    if (interaction === undefined) return blowRow

    const { id: interactionId } = interaction
    if (interactionId === InteractionIds.Blow) return thisRow
    return blowRow
  })

  return interactionMatrix.indexOf(blowInteractionRow)
}

const { harpStrata: { apparatus: { interactionMatrix }, degreeMatrix}} = harpFaceProps
const blowInteractionRowIndex = getBlowInteractionRowIndex(interactionMatrix)


test('HoleInteractionRowsTop returns an array, the end of which is a Blow', () => {
  const downToBlow = HoleInteractionRowsTop(harpFaceProps)
  const lastBlowHole = downToBlow.slice(-1)
  const { getByText: getByTextLastBlowHole } = render(<div>{lastBlowHole}</div>)

  const { [blowInteractionRowIndex]: blowDegreeRow } = degreeMatrix
  const [ lastBlow ] = blowDegreeRow.slice(-1)
  const { id: lastBlowId } = lastBlow || {id: 'fail'}

  expect(getByTextLastBlowHole(lastBlowId)).toBeInTheDocument()
})

test('HoleInteractionRowsBottom returns an array, the start of which is a Draw', () => {
  const downFromDraw = HoleInteractionRowsBottom(harpFaceProps)
  const [ firstDrawHole ] = downFromDraw
  const { getByText: getByTextFirstDrawHole } = render(<div>{firstDrawHole}</div>)

  const { [blowInteractionRowIndex +1]: drawDegreeRow } = degreeMatrix
  const [ firstDraw ] = drawDegreeRow
  const { id: firstDrawId } = firstDraw || {id: 'fail'}

  expect(getByTextFirstDrawHole(firstDrawId)).toBeInTheDocument()
})
