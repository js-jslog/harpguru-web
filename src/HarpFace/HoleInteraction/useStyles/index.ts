import { createUseStyles } from 'react-jss'

import type { UseStylesProps } from '../types'

const determineVisibility = (props: UseStylesProps): string => {
  const { positionFacts: { thisDegree }} = props
  return (thisDegree === undefined ? 'hidden' : 'visible')
}

const determineBorderRadias = (props: UseStylesProps): string => {
  const { theme: { sizesMap }} = props
  return `${sizesMap[3]}px`
}

export const useStyles = createUseStyles({
  holeInteractionClass: {
    'border-radius': (props: UseStylesProps): string => determineBorderRadias(props),
    'border-width': '0px',
    'background-color': 'black',
    color: 'white',
    'font-size': '20px',
    height: '25px',
    margin: 'auto',
    'margin-top': '5px',
    'margin-bottom': '5px',
    'text-align': 'center',
    visibility: (props: UseStylesProps): string => determineVisibility(props),
    width: '25px',
  }
})
