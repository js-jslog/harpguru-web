import { createUseStyles } from 'react-jss'
import React from 'react'
import type { ReactElement } from 'react'
import type { DegreeMatrix } from 'harpstrata'

type HarpFaceProps = {
  degreeMatrix: DegreeMatrix;
}

const constructColumnStyle = (props: HarpFaceProps): string => {
  const { degreeMatrix } = props
  return Array(degreeMatrix[0].length).fill('auto').join(' ')
}
const useStyles = createUseStyles({
  harpFaceClass: {
    display: 'grid',
    'grid-template-columns': (props: HarpFaceProps): string => constructColumnStyle(props)
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
