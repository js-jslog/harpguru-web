import { ApparatusIds, PozitionIds, getHarpStrata } from 'harpstrata'

import type { HarpFaceProps } from '../index'
import { getTheme } from '../Theme'


const harpStrata = getHarpStrata(ApparatusIds.MajorDiatonic, PozitionIds.First)
const theme = getTheme()

export const exampleHarpFaceProps: HarpFaceProps = {
  harpstrata: harpStrata,
  theme,
}
