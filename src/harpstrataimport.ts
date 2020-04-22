import { getApparatusIds, getPozitionIds, getHarpStrata } from 'harpstrata'
import type { HarpStrata } from 'harpstrata'

export const getFirstPositionHarp = (): HarpStrata => {
  const [ harpId ] = getApparatusIds()
  const [ pozitionId ] = getPozitionIds()
  const harpStrata = getHarpStrata(harpId, pozitionId)
  return harpStrata
}

export const getSecondPositionHarp = (): HarpStrata => {
  const [ harpId ] = getApparatusIds()
  const [ , pozitionId2 ] = getPozitionIds()
  const harpStrata = getHarpStrata(harpId, pozitionId2)
  return harpStrata
}
