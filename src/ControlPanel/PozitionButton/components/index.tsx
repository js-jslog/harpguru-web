import React from 'react'
import type { ReactElement } from 'react'

import type { PozitionButtonProps } from '../types'

export function PozitionButton(props: PozitionButtonProps): ReactElement {
  return (
    <div onClick={props.onClickFunction()}>
      {props.label}
    </div>
  )
}
