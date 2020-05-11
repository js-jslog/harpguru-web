import React from 'react'
import type { ReactElement } from 'react'

import type { ApparatusButtonProps } from '../types'

export function ApparatusButton(props: ApparatusButtonProps): ReactElement {
  return (
    <div onClick={(): void => props.setApparatusId(props.id)}>
      {props.id}
    </div>
  )
}
