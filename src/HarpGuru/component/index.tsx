import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, PozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { HarpStrata, InteractionIds } from 'harpstrata'

import { HarpFace, PresentationModes, generateHarpFaceStyles, getActiveColorSchemeIds, getTheme } from '../../HarpFace'
import type { HarpFaceProps, ThemePrimer } from '../../HarpFace'
import { DisplayModeToggler } from '../../ControlPanel/DisplayModeToggler'
import type { DisplayModeTogglerProps } from '../../ControlPanel/DisplayModeToggler'
import { ControlPanel } from '../../ControlPanel'
import type { ControlPanelProps } from '../../ControlPanel'


const [ apparatusId ] = getApparatusIds()
const [ pozitionId ] = getPozitionIds()
const [ pitchId ] = getPitchIds()

const themePrimer: ThemePrimer = {
  seedSize: 0.8,
  colorSchemeId: getActiveColorSchemeIds()[0],
}

const initialHarpStrata: HarpStrata = getHarpStrata(apparatusId, pozitionId, pitchId)
const inactiveInteractions: InteractionIds[] = []
const styles = generateHarpFaceStyles(getTheme(themePrimer))


export function HarpGuru(): ReactElement {
  const [ activeHarpStrata, setHarpStrata ] = useState(initialHarpStrata)
  const [ activeDisplayMode, setDisplayMode ] = useState(PresentationModes.Degree)

  const setPozitionId = (pozitionId: PozitionIds): void => {
    setHarpStrata(getHarpStrata(apparatusId, pozitionId, pitchId))
  }

  const harpStrata = activeHarpStrata
  const presentationMode = activeDisplayMode

  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const controlPanelProps: ControlPanelProps = { setPozitionId }
  const harpFaceProps: HarpFaceProps = { harpStrata, inactiveInteractions, presentationMode, styles }
  return (
    <div>
      <ControlPanel {...controlPanelProps} />
      <DisplayModeToggler {...displayModeTogglerProps} />
      <HarpFace {...harpFaceProps} />
    </div>
  )
}
