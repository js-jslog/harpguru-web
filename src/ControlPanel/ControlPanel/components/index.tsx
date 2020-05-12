import React from 'react'
import type { ReactElement } from 'react'

import type { ControlPanelProps } from '../types'
import { PozitionButtons } from '../../PozitionButtons'
import type { PozitionButtonsProps } from '../../PozitionButtons'
import { PitchButtons } from '../../PitchButtons'
import type { PitchButtonsProps } from '../../PitchButtons'
import { DisplayModeToggler } from '../../DisplayModeToggler'
import type { DisplayModeTogglerProps } from '../../DisplayModeToggler'
import { ApparatusButtons } from '../../ApparatusButtons'
import type { ApparatusButtonsProps } from '../../ApparatusButtons'

export function ControlPanel(props: ControlPanelProps): ReactElement {
  const { setApparatusId, setPozitionId, setPitchId, setDisplayMode } = props
  const apparatusButtonsProps: ApparatusButtonsProps = { setApparatusId }
  const pozitionButtonsProps: PozitionButtonsProps = { setPozitionId }
  const pitchButtonsProps: PitchButtonsProps = { setPitchId }
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  return (
    <div>
      Control Panel
      <ApparatusButtons {...apparatusButtonsProps} />
      <PozitionButtons {...pozitionButtonsProps} />
      <PitchButtons {...pitchButtonsProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
    </div>
  )
}
