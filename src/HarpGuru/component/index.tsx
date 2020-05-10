import React, { useState } from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { InteractionIds } from 'harpstrata'

import { HarpFace, PresentationModes, generateHarpFaceStyles, getActiveColorSchemeIds, getTheme } from '../../HarpFace'
import type { HarpFaceProps, ThemePrimer } from '../../HarpFace'
import { DisplayModeToggler } from '../../ControlPanel/DisplayModeToggler'
import type { DisplayModeTogglerProps } from '../../ControlPanel/DisplayModeToggler'
import { ControlPanel } from '../../ControlPanel'


const [ apparatusId ] = getApparatusIds()
const [ pozitionId ] = getPozitionIds()
const [ pitchId ] = getPitchIds()

const themePrimer: ThemePrimer = {
  seedSize: 0.8,
  colorSchemeId: getActiveColorSchemeIds()[0],
}

const harpStrata = getHarpStrata(apparatusId, pozitionId, pitchId)
const inactiveInteractions: InteractionIds[] = []
const styles = generateHarpFaceStyles(getTheme(themePrimer))


export function HarpGuru(): ReactElement {
  const [ activeDisplayMode, setDisplayMode ] = useState(PresentationModes.Degree)
  const presentationMode = activeDisplayMode
  const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }
  const harpFaceProps: HarpFaceProps = { harpStrata, inactiveInteractions, presentationMode, styles }
  return (
    <div>
      <ControlPanel />
      <DisplayModeToggler {...displayModeTogglerProps} />
      <HarpFace {...harpFaceProps} />
    </div>
  )
}
