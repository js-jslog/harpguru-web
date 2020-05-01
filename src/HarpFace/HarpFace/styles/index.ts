import { generateHoleNumberStyle } from '../../HoleNumber'
import { generateHoleInteractionStyles } from '../../HoleInteraction'

import type { HarpFaceStyles } from './types'

const holeInteractionStyles = generateHoleInteractionStyles()
const holeNumberStyle = generateHoleNumberStyle()

export const generateHarpFaceStyles = (): HarpFaceStyles => ({holeInteractionStyles, holeNumberStyle})
export type { HarpFaceStyles } from './types'
