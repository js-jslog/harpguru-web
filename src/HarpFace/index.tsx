import React from 'react'
import type { ReactElement } from 'react'
import type { DegreeMatrix } from 'harpstrata'

type HarpFaceProps = {
  degreeMatrix: DegreeMatrix;
}

export function HarpFace(props: HarpFaceProps): ReactElement {
  const { degreeMatrix } = props
  const [[ degree ]] = degreeMatrix
  let degreeId = undefined
  if ( degree !== undefined ) ({ id: degreeId } = degree)
  return (
    <div>
      { degreeId }
    </div>
  )
}
