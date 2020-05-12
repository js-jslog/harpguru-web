import React from 'react'
import type { ReactElement } from 'react'
import { PitchIds } from 'harpstrata'

import type { PitchButtonsProps } from '../types'
import { PitchButton } from '../../PitchButton'
import type { PitchButtonProps } from '../../PitchButton'

export function PitchButtons(props: PitchButtonsProps): ReactElement {
  const { A, Bb } = PitchIds
  const { setPitchId } = props
  const pitchAPitchButtonProps: PitchButtonProps = { id: A, setPitchId }
  const pitchBbPitchButtonProps: PitchButtonProps = { id: Bb, setPitchId }

  return (
    <div>
      <div>Harp Key Pitch</div>
      <PitchButton {...pitchAPitchButtonProps} />
      <PitchButton {...pitchBbPitchButtonProps} />
    </div>
  )
}
