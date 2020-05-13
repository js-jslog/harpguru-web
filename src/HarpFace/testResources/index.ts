import { ApparatusIds, PozitionIds, PitchIds, getHarpStrata } from 'harpstrata'

import { getTheme } from '../Theme'
import type { HarpFaceProps } from '../HarpFace'
import { PresentationModes, generateHarpFaceStyles } from '../HarpFace'


const harpStrata = getHarpStrata(ApparatusIds.MajorDiatonic, PozitionIds.First, PitchIds.C)
const { Degree: presentationMode } = PresentationModes
const styles = generateHarpFaceStyles(getTheme())

export const exampleHarpFaceProps: HarpFaceProps = {
  harpStrata,
  presentationMode,
  styles,
}
