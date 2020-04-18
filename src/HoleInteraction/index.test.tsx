import React from 'react'
import type { Degree } from 'harpstrata'
import { DegreeIds } from 'harpstrata'
import { render, screen } from '@testing-library/react'

import { HoleInteraction } from './index'

test('HoleInteraction renders a dom element with the expected value included', () => {
  const flat3: Degree = {
    id: DegreeIds.Flat3,
  }
  render(<HoleInteraction degree={ flat3 } leftVoid={ false } />)
  expect(screen.getByText(DegreeIds.Flat3)).toBeInTheDocument()
})

test('HoleInteraction renders a dom element with a left border if the position next to it is not void', () => {
  const flat3: Degree = {
    id: DegreeIds.Flat3,
  }
  const expectedStyle = `
    color: black;
    border-color: black;
    border: 0px;
    border-left: 1px;
    font-size: 30px;
    text-align: centre;
  `
  render(<HoleInteraction degree={ flat3 } leftVoid={ false } />)
  expect(screen.getByText(DegreeIds.Flat3)).toHaveStyle(expectedStyle)
})

test('HoleInteraction renders a dom element without a left border if there are no holes directly to it\'s left', () => {
  const flat3: Degree = {
    id: DegreeIds.Flat3,
  }
  const expectedStyle = `
    color: black;
    border-color: black;
    border: 0px;
    border-left: 0px;
    font-size: 30px;
    text-align: centre;
  `
  render(<HoleInteraction degree={ flat3 } leftVoid={ true } />)
  expect(screen.getByText(DegreeIds.Flat3)).toHaveStyle(expectedStyle)
})

test('HoleInteraction renders a dom element with \'/\' conent and white color without a left border if it is void itelf', () => {
  const expectedStyle = `
    color: white;
    border-color: black;
    border: 0px;
    border-left: 0px;
    font-size: 30px;
    text-align: centre;
  `
  render(<HoleInteraction degree={ undefined } leftVoid={ false } />)
  expect(screen.getByText('/')).toHaveStyle(expectedStyle)
})
