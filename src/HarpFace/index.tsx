import { createUseStyles } from 'react-jss'
import React from 'react'
import type { ReactElement } from 'react'
import type { DegreeMatrix } from 'harpstrata'

type HarpFaceProps = {
  degreeMatrix: DegreeMatrix;
}

const useStyles = createUseStyles({
  harpFaceClass: {
    display: 'grid',
    'grid-template-columns': 'auto',
  }
})

export function HarpFace(props: HarpFaceProps): ReactElement {
  const classes = useStyles(props)
  const { degreeMatrix } = props
  const [[ degree ]] = degreeMatrix
  let degreeId = undefined
  if ( degree !== undefined ) ({ id: degreeId } = degree)
  return (
    <div className={classes.harpFaceClass}>
      { degreeId }
    </div>
  )
}
