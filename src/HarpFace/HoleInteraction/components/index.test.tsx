import React from 'react'
import { DegreeIds, InteractionIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react'

import { exampleHarpFaceProps } from '../../testResources'

import { HoleInteraction } from './index'

test('HoleInteraction renders a dom element with the expected value included', () => {
  const { getByText } = render(<HoleInteraction {...exampleHarpFaceProps} yxCoord={[3,0]} />)
  expect(getByText(DegreeIds.Second)).toBeInTheDocument()
})

test('HoleInteraction renders an invisible dom element if it is undefined', () => {
  const expectedStyle = `
    visibility: hidden;
  `
  const { container } = render(<HoleInteraction {...exampleHarpFaceProps} yxCoord={ [0,0] } />)
  expect(container.firstChild).toHaveStyle(expectedStyle)
})

test('HoleInteraction renders with a class identifying it\'s position in the matrix', () => {
  const { getByText } = render(<HoleInteraction {...exampleHarpFaceProps} yxCoord={ [2,0] } />)
  expect(getByText(DegreeIds.Root).getAttribute('class')).toMatch(/yx-coord-2-0/)
})

test('HoleInteraction renders a value toggled between degree and interaction by a click', () => {
  const { getByText } = render(<HoleInteraction {...exampleHarpFaceProps} yxCoord={[3,0]} />)
  expect(getByText(DegreeIds.Second)).toBeInTheDocument()
  fireEvent.click(getByText(DegreeIds.Second))
  expect(getByText(InteractionIds.Draw)).toBeInTheDocument()
  fireEvent.click(getByText(InteractionIds.Draw))
  expect(getByText(DegreeIds.Second)).toBeInTheDocument()
})

test('HoleInteraction renders with transparent background if it is part of an inactive interaction group', () => {
  const expectedStyle = `
    background-color: transparent;
  `
  const { getByText } = render(<HoleInteraction {...exampleHarpFaceProps} yxCoord={ [1,0] } />)
  expect(getByText(DegreeIds.Flat3)).toHaveStyle(expectedStyle)
})