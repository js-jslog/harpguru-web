import { generateHoleInteractionStyles } from '../HoleInteraction'

import type { HarpFaceStyles } from './types'

const holeInteractionStyles = generateHoleInteractionStyles()

export const generateStyles = (): HarpFaceStyles => ({holeInteractionStyles})
