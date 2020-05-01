import { InteractionIds, ApparatusIds, PozitionIds, getHarpStrata } from 'harpstrata'

import type { HarpFaceProps } from '../index'
import { generateHarpFaceStyles } from '../index'
import { getTheme } from '../Theme'


const harpStrata = getHarpStrata(ApparatusIds.MajorDiatonic, PozitionIds.First)
const inactiveInteractions: InteractionIds[] = [InteractionIds.OverBlow1]
const styles = generateHarpFaceStyles(getTheme())

export const exampleHarpFaceProps: HarpFaceProps = {
  harpStrata,
  inactiveInteractions,
  styles,
}
