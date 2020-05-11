import React from 'react'
import type { ReactElement } from 'react'

import type { ControlPanelProps } from '../types'
import { PozitionButtons } from '../PozitionButtons'
import type { PozitionButtonsProps } from '../PozitionButtons'

export function ControlPanel(props: ControlPanelProps): ReactElement {
  const { setPozitionId } = props
  const pozitionButtonsProps: PozitionButtonsProps = { setPozitionId }
  return (
    <div>
      <PozitionButtons {...pozitionButtonsProps} />
    </div>
  )
}
