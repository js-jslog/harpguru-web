import type { Theme } from '../../Theme'

import type { HoleNumberStyle } from './types'


export type { HoleNumberStyle } from './types'

export const generateHoleNumberStyle = (theme: Theme): HoleNumberStyle => {
  const { sizes } = theme

  const fontSize = `${sizes[4]}px`
  const height = `${sizes[5]}px`
  const marginTop = `${sizes[2]}px`
  const marginBottom = `${sizes[2]}px`
  const width = `${sizes[6]}px`

  return { fontSize, height, marginTop, marginBottom, width }
}
