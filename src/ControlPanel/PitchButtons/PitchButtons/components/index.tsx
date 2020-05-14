import React from 'react'
import type { ReactElement } from 'react'
import { PitchIds } from 'harpstrata'

import type { PitchButtonsProps } from '../types'
import { PitchButton } from '../../PitchButton'
import type { PitchButtonProps } from '../../PitchButton'

export function PitchButtons(props: PitchButtonsProps): ReactElement {
  const { A, Bb, B, C, Db, D, Eb, E, F, Gb, G, Ab } = PitchIds
  const { setPitchId } = props
  const pitchAPitchButtonProps: PitchButtonProps = { id: A, setPitchId }
  const pitchBbPitchButtonProps: PitchButtonProps = { id: Bb, setPitchId }
  const pitchBPitchButtonProps: PitchButtonProps = { id: B, setPitchId }
  const pitchCPitchButtonProps: PitchButtonProps = { id: C, setPitchId }
  const pitchDbPitchButtonProps: PitchButtonProps = { id: Db, setPitchId }
  const pitchDPitchButtonProps: PitchButtonProps = { id: D, setPitchId }
  const pitchEbPitchButtonProps: PitchButtonProps = { id: Eb, setPitchId }
  const pitchEPitchButtonProps: PitchButtonProps = { id: E, setPitchId }
  const pitchFPitchButtonProps: PitchButtonProps = { id: F, setPitchId }
  const pitchGbPitchButtonProps: PitchButtonProps = { id: Gb, setPitchId }
  const pitchGPitchButtonProps: PitchButtonProps = { id: G, setPitchId }
  const pitchAbPitchButtonProps: PitchButtonProps = { id: Ab, setPitchId }

  return (
    <div role='menu'>
      <div>Harp Key Pitch</div>
      <PitchButton {...pitchAPitchButtonProps} />
      <PitchButton {...pitchBbPitchButtonProps} />
      <PitchButton {...pitchBPitchButtonProps} />
      <PitchButton {...pitchCPitchButtonProps} />
      <PitchButton {...pitchDbPitchButtonProps} />
      <PitchButton {...pitchDPitchButtonProps} />
      <PitchButton {...pitchEbPitchButtonProps} />
      <PitchButton {...pitchEPitchButtonProps} />
      <PitchButton {...pitchFPitchButtonProps} />
      <PitchButton {...pitchGbPitchButtonProps} />
      <PitchButton {...pitchGPitchButtonProps} />
      <PitchButton {...pitchAbPitchButtonProps} />
    </div>
  )
}
