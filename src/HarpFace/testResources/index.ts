import { ApparatusIds, PozitionIds, PitchIds, getHarpStrata } from 'harpstrata'
import type { HarpStrataProps, ActiveIds } from 'harpstrata'

import { getTheme } from '../Theme'
import type { HarpFaceProps } from '../HarpFace'
import { DisplayModes, generateHarpFaceStyles } from '../HarpFace'


const harpStrataProps: HarpStrataProps = {
  apparatusId: ApparatusIds.MajorDiatonic,
  pozitionId: PozitionIds.First,
  keyPitchId: PitchIds.C,
  activeIds: [] as ActiveIds,
}
const harpStrata = getHarpStrata(harpStrataProps)
const { Degree: displayMode } = DisplayModes
const styles = generateHarpFaceStyles(getTheme())
const toggleActiveDegreeId = jest.fn()

export const exampleHarpFaceProps: HarpFaceProps = {
  harpStrata,
  displayMode,
  styles,
  toggleActiveDegreeId,
}
