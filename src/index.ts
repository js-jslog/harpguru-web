import { getHarpIds, getPozitions, getHarpStrata } from 'harpstrata'
import type { HarpStrata } from 'harpstrata'

export const getAHarp = (): HarpStrata => {
  const [ harpId ] = getHarpIds()
  const [ pozitionId ] = getPozitions()
  const harpStrata = getHarpStrata(harpId, pozitionId)
  return harpStrata
}
