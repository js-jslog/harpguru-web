import React from 'react'
import type { ReactElement } from 'react'
import Button from '@material-ui/core/Button'

import type { ApparatusButtonProps } from '../types'

export function ApparatusButton(props: ApparatusButtonProps): ReactElement {
  return (
    <Button role='menuitem' onClick={(): void => props.setApparatusId(props.id)}>
      {props.id}
    </Button>
  )
}
