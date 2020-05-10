import React from 'react'
import type { ReactElement } from 'react'
import { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { InteractionIds } from 'harpstrata'

import { HarpFace, PresentationModes, generateHarpFaceStyles, getActiveColorSchemeIds, getTheme } from '../../HarpFace'
import type { HarpFaceProps, ThemePrimer } from '../../HarpFace'
import { DisplayModeToggler } from '../../ControlPanel/DisplayModeToggler'
import type { DisplayModeTogglerProps } from '../../ControlPanel/DisplayModeToggler'
import { ControlPanel } from '../../ControlPanel'

const setDisplayMode = (): void => {return}
const displayModeTogglerProps: DisplayModeTogglerProps = { setDisplayMode }

const [ apparatusId ] = getApparatusIds()
const [ pozitionId ] = getPozitionIds()
const [ pitchId ] = getPitchIds()

const themePrimer: ThemePrimer = {
  seedSize: 0.8,
  colorSchemeId: getActiveColorSchemeIds()[0],
}

const harpStrata = getHarpStrata(apparatusId, pozitionId, pitchId)
const inactiveInteractions: InteractionIds[] = []
const { Degree: presentationMode } = PresentationModes
const styles = generateHarpFaceStyles(getTheme(themePrimer))

const harpFaceProps: HarpFaceProps = { harpStrata, inactiveInteractions, presentationMode, styles }

export function HarpGuru(): ReactElement {
  return (
    <div>
      <ControlPanel />
      <DisplayModeToggler {...displayModeTogglerProps} />
      <HarpFace {...harpFaceProps} />
    </div>
  )
}
