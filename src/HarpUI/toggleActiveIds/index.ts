import type { DegreeIds, ActiveDegreeIds } from 'harpstrata'

export const toggleActiveDegreeIds = (degreeId: DegreeIds, activeDegreeIds: ActiveDegreeIds, setActiveDegreeIds: Function): void => {
  setActiveDegreeIds([ ...activeDegreeIds, degreeId ])
}
