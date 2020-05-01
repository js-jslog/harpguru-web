import { getTheme } from '../../Theme'

import type { HoleNumberStyle } from './types'

const theme = getTheme()
const { sizesMap } = theme

export type { HoleNumberStyle } from './types'

export const generateHoleNumberStyle = (): HoleNumberStyle => {
  const fontSize = `${sizesMap[4]}px`
  const height = `${sizesMap[5]}px`
  const marginTop = `${sizesMap[2]}px`
  const marginBottom = `${sizesMap[2]}px`
  const width = `${sizesMap[6]}px`

  return { fontSize, height, marginTop, marginBottom, width }
}
