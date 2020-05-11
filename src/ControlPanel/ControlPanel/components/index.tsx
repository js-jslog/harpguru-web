import React from 'react'
import type { ReactElement } from 'react'

import type { ControlPanelProps } from '../types'
import { PozitionButtons } from '../../PozitionButtons'
import type { PozitionButtonsProps } from '../../PozitionButtons'
import { DisplayModeToggler } from '../../DisplayModeToggler'
import type { DisplayModeTogglerProps } from '../../DisplayModeToggler'
import { ApparatusButtons } from '../../ApparatusButtons'
import type { ApparatusButtonsProps } from '../../ApparatusButtons'

export function ControlPanel(props: ControlPanelProps): ReactElement {
  const { setApparatusId, setPozitionId, setDisplayMode } = props
  const apparatusButtonsProps: ApparatusButtonsProps = { setApparatusId }
  const pozitionButtonsProps: PozitionButtonsProps = { setPozitionId }
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  return (
    <div>
      <ApparatusButtons {...apparatusButtonsProps} />
      <PozitionButtons {...pozitionButtonsProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
    </div>
  )
}
