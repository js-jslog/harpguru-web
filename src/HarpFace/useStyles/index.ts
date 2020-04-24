import { createUseStyles } from 'react-jss'

import type { HarpFaceProps } from '../index'

const determineHarpFaceWidth = (props: HarpFaceProps): string => {
  const { harpstrata: { degreeMatrix } } = props
  const [ degreeRow ] = degreeMatrix
  const { length: columnNumber } = degreeRow
  return `${(50 * columnNumber)}px`
}

const constructColumnStyle = (props: HarpFaceProps): string => {
  const { harpstrata: { degreeMatrix } } = props
  const [ degreeRow ] = degreeMatrix
  return Array(degreeRow.length).fill('auto').join(' ')
}

export const useStyles = createUseStyles({
  harpFaceClass: {
    display: 'grid',
    width: (props: HarpFaceProps): string => determineHarpFaceWidth(props),
    'grid-template-columns': (props: HarpFaceProps): string => constructColumnStyle(props)
  }
})
