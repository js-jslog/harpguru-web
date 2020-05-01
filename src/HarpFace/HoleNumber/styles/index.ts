import type { Theme } from '../../Theme'

import type { HoleNumberStyles } from './types'


export type { HoleNumberStyles } from './types'

export const generateHoleNumberStyles = (theme: Theme): HoleNumberStyles => {
  const { sizes } = theme

  const fontSize = `${sizes[7]}px`
  const height = `${sizes[7]}px`
  const marginTop = '0px'
  const marginBottom = '0px'
  const width = `${sizes[9]}px`

  return { fontSize, height, marginTop, marginBottom, width }
}
