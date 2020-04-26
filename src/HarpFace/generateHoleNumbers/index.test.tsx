import { getApparatusIds, getPozitionIds, getHarpStrata } from 'harpstrata'

import type { HarpFaceProps } from '../types'
import { getTheme } from '../../Theme'

import { generateHoleNumbers } from './index'


const harpStrata = getHarpStrata(getApparatusIds()[0], getPozitionIds()[0])
const theme = getTheme({seedSize: 1})
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
