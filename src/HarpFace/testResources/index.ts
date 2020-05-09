import { ApparatusIds, PozitionIds, PitchIds, getHarpStrata } from 'harpstrata'

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
const { Degree: presentationMode } = PresentationModes
const styles = generateHarpFaceStyles(getTheme())

export const exampleHarpFaceProps: HarpFaceProps = {
  harpStrata,
  presentationMode,
  styles,
}
