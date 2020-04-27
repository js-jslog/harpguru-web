import React from 'react'
import { render } from '@testing-library/react'

import { exampleHarpFaceProps } from '../testResources'

import { HoleNumberRow } from './index'


test('HoleNumberRow returns an array of HoleNumber components which is the width of the harmonica', () => {
  const { harpStrata: { degreeMatrix }} = exampleHarpFaceProps
  const [ { length: columnCount } ] = degreeMatrix
  const holeNumbers = HoleNumberRow(exampleHarpFaceProps)
  expect(holeNumbers.length).toBe(columnCount)
})

test('HoleNumberRow returns holes numbered 1 and the top, whatever the top might be', () => {
  const { harpStrata: { degreeMatrix }} = exampleHarpFaceProps
  const [ { length: columnCount } ] = degreeMatrix
  const holeNumbers = HoleNumberRow(exampleHarpFaceProps)
  const { getByText } = render(<div>{ holeNumbers }</div>)
  expect(getByText('1')).toBeInTheDocument()
  expect(getByText(String(columnCount))).toBeInTheDocument()
})
