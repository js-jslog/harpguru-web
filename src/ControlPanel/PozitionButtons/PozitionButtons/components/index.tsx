import React from 'react'
import type { ReactElement } from 'react'
import { PozitionIds } from 'harpstrata'

import type { PozitionButtonsProps } from '../types'
import { PozitionButton } from '../../PozitionButton'

export function PozitionButtons(props: PozitionButtonsProps): ReactElement {
  const { First: id } = PozitionIds
  const { setPozitionId } = props
  const firstPozitionButtonProps = { id, setPozitionId }

  return (
    <div>
      <div>Harp Position</div>
      <PozitionButton {...firstPozitionButtonProps} />
    </div>
  )
}
