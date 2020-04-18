import React from 'react'
import type { ReactElement } from 'react'
import type { DegreeMatrix } from 'harpstrata'

type HarpFaceProps = {
  degreeMatrix: DegreeMatrix;
}

export function HarpFace(props: HarpFaceProps): ReactElement {
  const [[{ id: singleDegree }]] = props.degreeMatrix
  return (
    <div>
      { singleDegree }
    </div>
  )
}
