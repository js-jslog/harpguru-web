import { InteractionIds, ApparatusIds, PozitionIds, PitchIds, getHarpStrata } from 'harpstrata'

import { getTheme } from '../Theme'
import type { HarpFaceProps } from '../HarpFace'
import { PresentationModes, generateHarpFaceStyles } from '../HarpFace'


const harpStrata = getHarpStrata(ApparatusIds.MajorDiatonic, PozitionIds.First, PitchIds.C)
const inactiveInteractions: InteractionIds[] = [InteractionIds.OverBlow1]
const { Degree: presentationMode } = PresentationModes
const styles = generateHarpFaceStyles(getTheme())

export const exampleHarpFaceProps: HarpFaceProps = {
  harpStrata,
  inactiveInteractions,
  presentationMode,
  styles,
}
