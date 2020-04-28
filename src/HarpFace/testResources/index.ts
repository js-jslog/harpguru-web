import { ApparatusIds, PozitionIds, getHarpStrata } from 'harpstrata'
import type { InteractionIds } from 'harpstrata'

import type { HarpFaceProps } from '../index'
import { getTheme } from '../index'


const harpStrata = getHarpStrata(ApparatusIds.MajorDiatonic, PozitionIds.First)
const theme = getTheme()
const inactiveInteractions: InteractionIds[] = []

export const exampleHarpFaceProps: HarpFaceProps = {
  harpStrata,
  inactiveInteractions,
  theme,
}
