import React from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'
import { render } from '@testing-library/react'

import { exampleHarpFaceProps } from '../../testResources'
import { PresentationModes } from '../../HarpFace'

import { HoleInteraction } from './index'

test('HoleInteraction renders a dom element with the expected degree value included', () => {
  const harpFacePropsWithDegreePresentation = { ...exampleHarpFaceProps, presentationMode: PresentationModes.Degree }
  const { getByText } = render(<HoleInteraction {...harpFacePropsWithDegreePresentation} yxCoord={[3,0]} />)
  expect(getByText(DegreeIds.Second)).toBeInTheDocument()
})

test('HoleInteraction renders a dom element with the expected pitch value included', () => {
  const harpFacePropsWithPitchPresentation = { ...exampleHarpFaceProps, presentationMode: PresentationModes.Pitch }
  const { getByText } = render(<HoleInteraction {...harpFacePropsWithPitchPresentation} yxCoord={[3,0]} />)
  expect(getByText(PitchIds.D)).toBeInTheDocument()
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

test('HoleInteraction renders with transparent background if it is part of an inactive interaction group', () => {
  const expectedStyle = `
    background-color: transparent;
  `
  const { getByText } = render(<HoleInteraction {...exampleHarpFaceProps} yxCoord={ [1,0] } />)
  expect(getByText(DegreeIds.Flat3)).toHaveStyle(expectedStyle)
})
