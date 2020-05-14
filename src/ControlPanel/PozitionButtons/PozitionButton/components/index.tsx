import React from 'react'
import type { ReactElement } from 'react'
import Button from '@material-ui/core/Button'

import type { PozitionButtonProps } from '../types'

export function PozitionButton(props: PozitionButtonProps): ReactElement {
  return (
    <Button role='menuitem' onClick={(): void => props.setPozitionId(props.id)}>
      {props.id}
    </Button>
  )
}
