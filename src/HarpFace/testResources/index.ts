import { InteractionIds, ApparatusIds, PozitionIds, PitchIds, getHarpStrata } from 'harpstrata'

import { getTheme } from '../Theme'
import type { HarpFaceProps } from '../HarpFace'
import { PresentationModes, generateHarpFaceStyles } from '../HarpFace'


const harpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  keyPitchId: PitchIds.C,
  activeIds: [],
}
const harpStrata = getHarpStrata(harpStrataProps)
const inactiveInteractions: InteractionIds[] = [InteractionIds.OverBlow1]
const { Degree: presentationMode } = PresentationModes
const styles = generateHarpFaceStyles(getTheme())

export const exampleHarpFaceProps: HarpFaceProps = {
  harpStrata,
  inactiveInteractions,
  presentationMode,
  styles,
}
