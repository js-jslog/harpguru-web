import React from 'react'
import type { ReactElement } from 'react'
import Button from '@material-ui/core/Button'

import { DisplayModeTogglerProps } from '../types'
import { DisplayModes } from '../../../HarpFace'

export function DisplayModeToggler(props: DisplayModeTogglerProps): ReactElement {
  const { setDisplayMode } = props
  return (
    <div role='menu'>
      <div>Display Mode</div>
      <Button role='menuitem' onClick={(): void => setDisplayMode(DisplayModes.Degree)}>{DisplayModes.Degree}</Button>
      <Button role='menuitem' onClick={(): void => setDisplayMode(DisplayModes.Pitch)}>{DisplayModes.Pitch}</Button>
    </div>
  )
}
