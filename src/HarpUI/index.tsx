import React, { useState } from 'react'
import type { ReactElement } from 'react'

import { getFirstPositionHarp, getSecondPositionHarp } from '../harpstrataimport'
import { HarpFace } from '../HarpFace'

export function HarpUI(): ReactElement {
  const { degreeMatrix: firstHarp } = getFirstPositionHarp()
  const { degreeMatrix: secondHarp } = getSecondPositionHarp()
  const [ degreeMatrix, setDegreeMatrix ] = useState(firstHarp)
  return (
    <div>
      <HarpFace degreeMatrix={degreeMatrix}/>
      <button onClick={(): void => setDegreeMatrix(firstHarp)}>
        First
      </button>
      <button onClick={(): void => setDegreeMatrix(secondHarp)}>
        Second
      </button>
    </div>
  )
}
