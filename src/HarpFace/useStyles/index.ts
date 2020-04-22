import { createUseStyles } from 'react-jss'

import type { HarpFaceProps } from '../index'

const constructColumnStyle = (props: HarpFaceProps): string => {
  const { harpstrata: { degreeMatrix } } = props
  const [ degreeRow ] = degreeMatrix
  return Array(degreeRow.length).fill('auto').join(' ')
}

export const useStyles = createUseStyles({
  harpFaceClass: {
    display: 'grid',
    'grid-template-columns': (props: HarpFaceProps): string => constructColumnStyle(props)
  }
})
