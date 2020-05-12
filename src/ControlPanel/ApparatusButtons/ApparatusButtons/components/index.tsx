import React from 'react'
import type { ReactElement } from 'react'
import { ApparatusIds } from 'harpstrata'

import type { ApparatusButtonsProps } from '../types'
import { ApparatusButton } from '../../ApparatusButton'
import type { ApparatusButtonProps } from '../../ApparatusButton'

export function ApparatusButtons(props: ApparatusButtonsProps): ReactElement {
  const { MajorDiatonic, CountryTuned } = ApparatusIds
  const { setApparatusId } = props
  const majorDiatonicApparatusButtonProps: ApparatusButtonProps = { id: MajorDiatonic, setApparatusId }
  const countryTunedApparatusButtonProps: ApparatusButtonProps = { id: CountryTuned, setApparatusId }

  return (
    <div>
      <div>Harp Apparatus</div>
      <ApparatusButton {...majorDiatonicApparatusButtonProps} />
      <ApparatusButton {...countryTunedApparatusButtonProps} />
    </div>
  )
}
