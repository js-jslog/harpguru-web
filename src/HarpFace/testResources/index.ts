import { getApparatusIds, getPozitionIds, getHarpStrata } from 'harpstrata'

import type { HarpFaceProps } from '../index'
import { getTheme } from '../../Theme'


const harpStrata = getHarpStrata(getApparatusIds()[0], getPozitionIds()[0])
const theme = getTheme()

export const exampleHarpFaceProps: HarpFaceProps = {
  harpstrata: harpStrata,
  theme,
}
