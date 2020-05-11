import React from 'react'
import type { ReactElement } from 'react'

import type { PozitionButtonProps } from '../types'

export function PozitionButton(props: PozitionButtonProps): ReactElement {
  return (
    <div onClick={(): void => props.setPozitionId(props.id)}>
      {props.label}
    </div>
  )
}
