import React from 'react'
import type { ReactElement } from 'react'

import type { PozitionButtonProps } from '../types'

export function PozitionButton(props: PozitionButtonProps): ReactElement {
  return (
    <button role='menuitem' onClick={(): void => props.setPozitionId(props.id)}>
      {props.id}
    </button>
  )
}
