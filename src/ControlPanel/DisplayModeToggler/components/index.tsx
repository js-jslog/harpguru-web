import React from 'react'
import type { ReactElement } from 'react'

import { DisplayModeTogglerProps } from '../types'
import { PresentationModes } from '../../../HarpFace'

export function DisplayModeToggler(props: DisplayModeTogglerProps): ReactElement {
  const { setDisplayMode } = props
  return (
    <div>
      <div>Display Mode</div>
      <input type='button' value={PresentationModes.Degree} onClick={(): void => setDisplayMode(PresentationModes.Degree)} />
      <input type='button' value={PresentationModes.Pitch} onClick={(): void => setDisplayMode(PresentationModes.Pitch)} />
    </div>
  )
}
