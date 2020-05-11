import React from 'react'
import type { ReactElement } from 'react'
import { PozitionIds } from 'harpstrata'

import type { PozitionButtonsProps } from '../types'
import { PozitionButton } from '../../PozitionButton'
import type { PozitionButtonProps } from '../../PozitionButton'

export function PozitionButtons(props: PozitionButtonsProps): ReactElement {
  const { First, Second } = PozitionIds
  const { setPozitionId } = props
  const firstPozitionButtonProps: PozitionButtonProps = { id: First, setPozitionId }
  const secondPozitionButtonProps: PozitionButtonProps = { id: Second, setPozitionId }

  return (
    <div>
      <div>Harp Position</div>
      <PozitionButton {...firstPozitionButtonProps} />
      <PozitionButton {...secondPozitionButtonProps} />
    </div>
  )
}
