import React from 'react'
import type { ReactElement } from 'react'
import { PitchIds } from 'harpstrata'

import type { PitchButtonsProps } from '../types'
import { PitchButton } from '../../PitchButton'
import type { PitchButtonProps } from '../../PitchButton'

export function PitchButtons(props: PitchButtonsProps): ReactElement {
  const { C, Db } = PitchIds
  const { setPitchId } = props
  const pitchCPitchButtonProps: PitchButtonProps = { id: C, setPitchId }
  const pitchDbPitchButtonProps: PitchButtonProps = { id: Db, setPitchId }

  return (
    <div>
      <div>Harp Key Pitch</div>
      <PitchButton {...pitchCPitchButtonProps} />
      <PitchButton {...pitchDbPitchButtonProps} />
    </div>
  )
}
