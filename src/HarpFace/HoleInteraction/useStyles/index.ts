import { createUseStyles } from 'react-jss'

import type { UseStylesProps } from '../types'

type Styles = {
  readonly borderRadius: string;
  readonly visibility: string;
}

const determineStyles = (props: UseStylesProps): Styles  => {
  const { theme: { sizesMap }} = props
  const { positionFacts: { thisDegree }} = props

  const borderRadius = `${sizesMap[3]}px`
  const visibility = (thisDegree === undefined ? 'hidden' : 'visible')

  return { borderRadius, visibility }
}

export const useStyles = createUseStyles({
  holeInteractionClass: {
    'border-radius': (props: UseStylesProps): string => determineStyles(props).borderRadius,
    'border-width': '0px',
    'background-color': 'black',
    color: 'white',
    'font-size': '20px',
    height: '25px',
    margin: 'auto',
    'margin-top': '5px',
    'margin-bottom': '5px',
    'text-align': 'center',
    visibility: (props: UseStylesProps): string => determineStyles(props).visibility,
    width: '25px',
  }
})
