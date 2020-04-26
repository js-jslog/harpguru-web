import React from 'react'
import { getApparatusIds, getPozitionIds, getHarpStrata, InteractionIds } from 'harpstrata'
import { render } from '@testing-library/react'

import type { HarpFaceProps } from '../types'
import { getTheme } from '../../Theme'

import { generateHoleInteractions } from './index'


const harpStrata = getHarpStrata(getApparatusIds()[0], getPozitionIds()[0])
const theme = getTheme()
const harpFaceProps: HarpFaceProps = {
  harpstrata: harpStrata,
  theme,
}

test('generateHoleInteractions returns two HoleInteraction arrays, the end of the first is a Blow and the start of the next is a Draw', () => {
  const { downToBlow, downFromDraw } = generateHoleInteractions(harpFaceProps)
  const lastBlowHole = downToBlow.slice(-1)
  const [ firstDrawHole ] = downFromDraw
  const { getByText: getByTextLastBlowHole } = render(<div>{lastBlowHole}</div>)
  const { getByText: getByTextFirstDrawHole } = render(<div>{firstDrawHole}</div>)

  const { harpstrata: { apparatus: { interactionMatrix }, degreeMatrix}} = harpFaceProps
  // This reducer assumes that there is a Blow row somewhere in the matrix
  // If there isn't then this isn't going to function
  const blowInteractionRow = interactionMatrix.reduce((blowRow, thisRow) => {
    const [ interaction ] = thisRow
    if (interaction === undefined) return blowRow

    const { id: interactionId } = interaction
    if (interactionId === InteractionIds.Blow) return thisRow
    return blowRow
  })
  const blowInteractionRowIndex = interactionMatrix.indexOf(blowInteractionRow)
  const { [blowInteractionRowIndex]: blowDegreeRow } = degreeMatrix
  const [ lastBlow ] = blowDegreeRow.slice(-1)
  const { id: lastBlowId } = lastBlow || {id: 'fail'}

  const { [blowInteractionRowIndex +1]: drawDegreeRow } = degreeMatrix
  const [ firstDraw ] = drawDegreeRow
  const { id: firstDrawId } = firstDraw || {id: 'fail'}

  expect(getByTextLastBlowHole(lastBlowId)).toBeInTheDocument()
  expect(getByTextFirstDrawHole(firstDrawId)).toBeInTheDocument()
})
