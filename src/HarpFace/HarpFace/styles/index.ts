import { generateHoleInteractionStyles } from '../../HoleInteraction'

import type { HarpFaceStyles } from './types'

const holeInteractionStyles = generateHoleInteractionStyles()

export const generateHarpFaceStyles = (): HarpFaceStyles => ({holeInteractionStyles})
export type { HarpFaceStyles } from './types'
