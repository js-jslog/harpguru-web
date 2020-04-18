import React from 'react'
import type { Degree } from 'harpstrata'
import { DegreeIds } from 'harpstrata'
import { render } from '@testing-library/react'

import { HoleInteraction } from './index'

test('HoleInteraction renders a dom element with the expected value included', () => {
  const flat3: Degree = {
    id: DegreeIds.Flat3,
  }
  const { getByText } = render(<HoleInteraction degree={ flat3 } leftVoid={ false } />)
  expect(getByText(DegreeIds.Flat3)).toBeInTheDocument()
})

test('HoleInteraction renders a dom element with a left border if the position next to it is not void', () => {
  const flat3: Degree = {
    id: DegreeIds.Flat3,
  }
  const expectedStyle = `
    color: black;
    border-width: 0px;
    border-color: black;
    border-style: solid;
    border-left-width: 1px;
    font-size: 30px;
    text-align: center;
  `
  const { getByText } = render(<HoleInteraction degree={ flat3 } leftVoid={ false } />)
  expect(getByText(DegreeIds.Flat3)).toHaveStyle(expectedStyle)
})

test('HoleInteraction renders a dom element without a left border if there are no holes directly to it\'s left', () => {
  const flat3: Degree = {
    id: DegreeIds.Flat3,
  }
  const expectedStyle = `
    color: black;
    border-width: 0px;
    border-color: black;
    border-style: solid;
    border-left-width: 0px;
    font-size: 30px;
    text-align: center;
  `
  const { getByText } = render(<HoleInteraction degree={ flat3 } leftVoid={ true } />)
  expect(getByText(DegreeIds.Flat3)).toHaveStyle(expectedStyle)
})

test('HoleInteraction renders a dom element with \'/\' conent and white color without a left border if it is void itelf', () => {
  const expectedStyle = `
    color: white;
    border-width: 0px;
    border-color: black;
    border-style: solid;
    border-left-width: 0px;
    font-size: 30px;
    text-align: center;
  `
  const { getByText } = render(<HoleInteraction degree={ undefined } leftVoid={ false } />)
  expect(getByText('/')).toHaveStyle(expectedStyle)
})
