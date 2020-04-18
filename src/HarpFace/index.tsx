import { createUseStyles } from 'react-jss'
import React from 'react'
import type { ReactElement } from 'react'
import type { DegreeMatrix, DegreeRow, Degree } from 'harpstrata'

import { HoleInteraction } from '../HoleInteraction'

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

const generateHoleInteractions = (degreeMatrix: DegreeMatrix): ReactElement[] => {
  const mapped = degreeMatrix.map(function (degreeRow: DegreeRow, indexy) {
    return degreeRow.map(function (degree: Degree | undefined, indexx) {
      return <HoleInteraction key={indexx + '' + indexy} degree={degree} leftVoid={false} />
    })
  })
  const flattened = mapped.flat()
  return flattened
}

export function HarpFace(props: HarpFaceProps): ReactElement {
  const classes = useStyles(props)
  const { degreeMatrix } = props
  return (
    <div className={classes.harpFaceClass}>
      { generateHoleInteractions(degreeMatrix) }
    </div>
  )
}
