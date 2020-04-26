import React from 'react'
import { getApparatusIds, getPozitionIds, getHarpStrata } from 'harpstrata'
import { render } from '@testing-library/react'

import type { HarpFaceProps } from '../types'
import { getTheme } from '../../Theme'

import { generateHoleNumbers } from './index'


const harpStrata = getHarpStrata(getApparatusIds()[0], getPozitionIds()[0])
const theme = getTheme()
const harpFaceProps: HarpFaceProps = {
  harpstrata: harpStrata,
  theme,
}

test('generateHoleNumbers returns an array of HoleNumber components which is the width of the harmonica', () => {
  const { degreeMatrix } = harpStrata
  const [ { length: columnCount } ] = degreeMatrix
  const holeNumbers = generateHoleNumbers(harpFaceProps)
  expect(holeNumbers.length).toBe(columnCount)
})

test('generateHoleNumbers returns holes numbered 1 and the top, whatever the top might be', () => {
  const { degreeMatrix } = harpStrata
  const [ { length: columnCount } ] = degreeMatrix
  const holeNumbers = generateHoleNumbers(harpFaceProps)
  const { getByText } = render(<div>{ holeNumbers }</div>)
  expect(getByText('1')).toBeInTheDocument()
  expect(getByText(String(columnCount))).toBeInTheDocument()
})
