import { createUseStyles } from 'react-jss'

import type { HarpFaceProps } from '../types'

const constructColumnStyle = (props: HarpFaceProps): string => {
  const { degreeMatrix } = props
  return Array(degreeMatrix[0].length).fill('auto').join(' ')
}

export const useStyles = createUseStyles({
  harpFaceClass: {
    display: 'grid',
    'grid-template-columns': (props: HarpFaceProps): string => constructColumnStyle(props)
  }
})
