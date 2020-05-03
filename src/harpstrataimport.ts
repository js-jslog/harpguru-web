import { getApparatusIds, getPozitionIds, getPitchIds, getHarpStrata } from 'harpstrata'
import type { HarpStrata } from 'harpstrata'

export const getFirstPositionHarp = (): HarpStrata => {
  const [ harpId ] = getApparatusIds()
  const [ pozitionId ] = getPozitionIds()
  const [ harpKeyPitchId ] = getPitchIds()
  const harpStrata = getHarpStrata(harpId, pozitionId, harpKeyPitchId)
  return harpStrata
}

export const getSecondPositionHarp = (): HarpStrata => {
  const [ harpId ] = getApparatusIds()
  const [ , pozitionId2 ] = getPozitionIds()
  const [ harpKeyPitchId ] = getPitchIds()
  const harpStrata = getHarpStrata(harpId, pozitionId2, harpKeyPitchId)
  return harpStrata
}
