import type { DegreeIds, ActiveDegreeIds } from 'harpstrata'

export const toggleActiveDegreeIds = (degreeId: DegreeIds, activeDegreeIds: ActiveDegreeIds, setActiveDegreeIds: (activeDegreeIds: ActiveDegreeIds) => void): void => {
  if (activeDegreeIds.includes(degreeId)) {
    const arrayHead = activeDegreeIds.slice(0, activeDegreeIds.indexOf(degreeId))
    const arrayTail = activeDegreeIds.slice(activeDegreeIds.indexOf(degreeId) +1)
    setActiveDegreeIds([ ...arrayHead, ...arrayTail ])
  } else {
    setActiveDegreeIds([ ...activeDegreeIds, degreeId ])
  }
}
