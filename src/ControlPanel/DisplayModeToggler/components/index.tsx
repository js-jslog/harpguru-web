import React from 'react'
import type { ReactElement } from 'react'

import { DisplayModeTogglerProps } from '../types'

export function DisplayModeToggler(props: DisplayModeTogglerProps): ReactElement {
  const { setDisplayMode } = props
  return (
    <div>
      <input type='button' value='Degree' onClick={(): void => setDisplayMode()} />
      <input type='button' value='Pitch' onClick={(): void => setDisplayMode()} />
    </div>
  )
}
