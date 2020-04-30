import { InteractionIds, ApparatusIds, PozitionIds, getHarpStrata } from 'harpstrata'

import type { HarpFaceProps } from '../index'
import { getTheme } from '../index'


const harpStrata = getHarpStrata(ApparatusIds.MajorDiatonic, PozitionIds.First)
const theme = getTheme()
const inactiveInteractions: InteractionIds[] = [InteractionIds.OverBlow1]

export const exampleHarpFaceProps: HarpFaceProps = {
  harpStrata,
  inactiveInteractions,
  theme,
}
