import { InteractionIds, ApparatusIds, PozitionIds, getHarpStrata } from 'harpstrata'

import { getTheme } from '../Theme'
import type { HarpFaceProps } from '../HarpFace'
import { generateHarpFaceStyles } from '../HarpFace'


const harpStrata = getHarpStrata(ApparatusIds.MajorDiatonic, PozitionIds.First)
const inactiveInteractions: InteractionIds[] = [InteractionIds.OverBlow1]
const styles = generateHarpFaceStyles(getTheme())

export const exampleHarpFaceProps: HarpFaceProps = {
  harpStrata,
  inactiveInteractions,
  styles,
}
