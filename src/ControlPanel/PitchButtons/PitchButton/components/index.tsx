import React from 'react'
import type { ReactElement } from 'react'
import Button from '@material-ui/core/Button'

import type { PitchButtonProps } from '../types'

export function PitchButton(props: PitchButtonProps): ReactElement {
  return (
    <Button role='menuitem' onClick={(): void => props.setPitchId(props.id)}>
      {props.id}
    </Button>
  )
}
