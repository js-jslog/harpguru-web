import React from 'react'
import type { ReactElement } from 'react'

import { DisplayModeTogglerProps } from '../types'
import { DisplayModes } from '../../../HarpFace'

export function DisplayModeToggler(props: DisplayModeTogglerProps): ReactElement {
  const { setDisplayMode } = props
  return (
    <div role='menu'>
      <div>Display Mode</div>
      <button role='menuitem' onClick={(): void => setDisplayMode(DisplayModes.Degree)}>{DisplayModes.Degree}</button>
      <button role='menuitem' onClick={(): void => setDisplayMode(DisplayModes.Pitch)}>{DisplayModes.Pitch}</button>
    </div>
  )
}
