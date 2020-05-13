import React from 'react'
import type { ReactElement } from 'react'

import { DisplayModeTogglerProps } from '../types'
import { PresentationModes } from '../../../HarpFace'

export function DisplayModeToggler(props: DisplayModeTogglerProps): ReactElement {
  const { setDisplayMode } = props
  return (
    <div role='menu'>
      <div>Display Mode</div>
      <button role='menuitem' onClick={(): void => setDisplayMode(PresentationModes.Degree)}>{PresentationModes.Degree}</button>
      <button role='menuitem' onClick={(): void => setDisplayMode(PresentationModes.Pitch)}>{PresentationModes.Pitch}</button>
    </div>
  )
}
