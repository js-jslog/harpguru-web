import React from 'react'
import type { ReactElement } from 'react'

import type { ControlPanelProps } from '../types'
import { PozitionButtons } from '../../PozitionButtons'
import type { PozitionButtonsProps } from '../../PozitionButtons'
import { DisplayModeToggler } from '../../DisplayModeToggler'
import type { DisplayModeTogglerProps } from '../../DisplayModeToggler'

export function ControlPanel(props: ControlPanelProps): ReactElement {
  const { setPozitionId, setDisplayMode } = props
  const pozitionButtonsProps: PozitionButtonsProps = { setPozitionId }
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  return (
    <div>
      <PozitionButtons {...pozitionButtonsProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
    </div>
  )
}
