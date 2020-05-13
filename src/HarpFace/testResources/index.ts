import { ApparatusIds, PozitionIds, PitchIds, getHarpStrata } from 'harpstrata'

import { getTheme } from '../Theme'
import type { HarpFaceProps } from '../HarpFace'
import { DisplayModes, generateHarpFaceStyles } from '../HarpFace'


const harpStrata = getHarpStrata(ApparatusIds.MajorDiatonic, PozitionIds.First, PitchIds.C)
const { Degree: displayMode } = DisplayModes
const styles = generateHarpFaceStyles(getTheme())

export const exampleHarpFaceProps: HarpFaceProps = {
  harpStrata,
  displayMode,
  styles,
}
