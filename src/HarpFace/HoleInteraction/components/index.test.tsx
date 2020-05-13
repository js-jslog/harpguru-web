import React from 'react'
import { DegreeIds, PitchIds } from 'harpstrata'
import { render, fireEvent } from '@testing-library/react'

import { exampleHarpFaceProps } from '../../testResources'
import { DisplayModes } from '../../HarpFace'

import { HoleInteraction } from './index'

test('HoleInteraction renders a dom element with the expected degree value included', () => {
  const harpFacePropsWithDegreePresentation = { ...exampleHarpFaceProps, displayMode: DisplayModes.Degree }
  const { getByText } = render(<HoleInteraction {...harpFacePropsWithDegreePresentation} yxCoord={[3,0]} />)
  expect(getByText(DegreeIds.Second)).toBeInTheDocument()
})

test('HoleInteraction renders a dom element with the expected pitch value included', () => {
  const harpFacePropsWithPitchPresentation = { ...exampleHarpFaceProps, displayMode: DisplayModes.Pitch }
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

test('HoleInteraction calls it\'s props function when clicked passing it\'s Degree value as a parameter', () => {
  const toggleActiveDegreeId = jest.fn()
  const harpFaceProps = { ...exampleHarpFaceProps, toggleActiveDegreeId }
  const { getByText } = render(<HoleInteraction {...harpFaceProps} yxCoord={[3,0]} />)

  const holeInteraction = getByText(DegreeIds.Second)
  expect(holeInteraction).toBeInTheDocument()

  fireEvent.click(holeInteraction)
  expect(toggleActiveDegreeId.mock.calls.length).toBe(1)
})
