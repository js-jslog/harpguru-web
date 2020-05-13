import React from 'react'
import type { ReactElement } from 'react'

import type { PitchButtonProps } from '../types'

export function PitchButton(props: PitchButtonProps): ReactElement {
  return (
    <button role='menuitem' onClick={(): void => props.setPitchId(props.id)}>
      {props.id}
    </button>
  )
}
