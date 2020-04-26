import React from 'react'
import { getApparatusIds, getPozitionIds, getHarpStrata, InteractionIds } from 'harpstrata'
import { render } from '@testing-library/react'

import type { HarpFaceProps } from '../types'
import { getTheme } from '../../Theme'

import { generateHoleInteractions } from './index'


const harpStrata = getHarpStrata(getApparatusIds()[0], getPozitionIds()[0])
const theme = getTheme({seedSize: 1})
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
  const blowRow = interactionMatrix.reduce((blowRow, thisRow) => {
    //const [ {id: interactionId} ] = thisRow
    const [ interaction ] = thisRow
    const { id: interactionId } = interaction || {}
    if (blowRow === undefined && interactionId === InteractionIds.Blow) return thisRow
    return blowRow
  }, undefined)
  const blowRowIndex = interactionMatrix.indexOf(blowRow)
  const blowDegreeRow = degreeMatrix[blowRowIndex]
  const lastBlow = blowDegreeRow.slice(-1)[0]
  const { id: lastBlowId } = lastBlow || {}

  const drawDegreeRow = degreeMatrix[blowRowIndex +1]
  const firstDraw = drawDegreeRow[0]
  const { id: firstDrawId } = firstDraw || {}

  expect(getByTextLastBlowHole(lastBlowId)).toBeInTheDocument()
  expect(getByTextFirstDrawHole(firstDrawId)).toBeInTheDocument()
})
