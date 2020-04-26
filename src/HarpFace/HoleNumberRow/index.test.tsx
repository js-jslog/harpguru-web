import React from 'react'
import { getApparatusIds, getPozitionIds, getHarpStrata } from 'harpstrata'
import { render } from '@testing-library/react'

import type { HarpFaceProps } from '../types'
import { getTheme } from '../../Theme'

import { HoleNumberRow } from './index'


const harpStrata = getHarpStrata(getApparatusIds()[0], getPozitionIds()[0])
const theme = getTheme()
const harpFaceProps: HarpFaceProps = {
  harpstrata: harpStrata,
  theme,
}

test('HoleNumberRow returns an array of HoleNumber components which is the width of the harmonica', () => {
  const { degreeMatrix } = harpStrata
  const [ { length: columnCount } ] = degreeMatrix
  const holeNumbers = HoleNumberRow(harpFaceProps)
  expect(holeNumbers.length).toBe(columnCount)
})

test('HoleNumberRow returns holes numbered 1 and the top, whatever the top might be', () => {
  const { degreeMatrix } = harpStrata
  const [ { length: columnCount } ] = degreeMatrix
  const holeNumbers = HoleNumberRow(harpFaceProps)
  const { getByText } = render(<div>{ holeNumbers }</div>)
  expect(getByText('1')).toBeInTheDocument()
  expect(getByText(String(columnCount))).toBeInTheDocument()
})
