import React from 'react'
import type { ReactElement } from 'react'

import type { PitchButtonProps } from '../types'

export function PitchButton(props: PitchButtonProps): ReactElement {
  return (
    <div onClick={(): void => props.setPitchId(props.id)}>
      {props.id}
    </div>
  )
}
