import { createUseStyles } from 'react-jss'

import type { UseStylesProps } from '../types'

type Styles = {
  readonly borderRadius: string;
  readonly backgroundColor: string;
  readonly color: string;
  readonly fontSize: string;
  readonly height: string;
  readonly marginTop: string;
  readonly marginBottom: string;
  readonly visibility: string;
  readonly width: string;
}

const determineStyles = (props: UseStylesProps): Styles => {
  const { theme: { sizesMap, backgroundColors }} = props
  const { positionFacts: { thisDegree, thisInteraction, isActive }} = props
  const themedBackgroundColor = (thisInteraction ? backgroundColors[thisInteraction.id] : 'transparent')

  const borderRadius = `${sizesMap[4]}px`
  const backgroundColor = (isActive ? themedBackgroundColor : 'transparent')
  const color = (isActive ? 'white' : 'black')
  const fontSize = `${sizesMap[5]}px`
  const height = `${sizesMap[6]}px`
  const marginTop = `${sizesMap[4]}px`
  const marginBottom = `${sizesMap[4]}px`
  const visibility = (thisDegree === undefined ? 'hidden' : 'visible')
  const width = `${sizesMap[6]}px`

  return { borderRadius, backgroundColor, color, fontSize, height, marginTop, marginBottom, visibility, width }
}

export const useStyles = createUseStyles({
  holeInteractionClass: {
    'border-radius': (props: UseStylesProps): string => determineStyles(props).borderRadius,
    'border-width': '0px',
    'background-color': (props: UseStylesProps): string => determineStyles(props).backgroundColor,
    color: (props: UseStylesProps): string => determineStyles(props).color,
    'font-size': (props: UseStylesProps): string => determineStyles(props).fontSize,
    height: (props: UseStylesProps): string => determineStyles(props).height,
    margin: 'auto',
    'margin-top': (props: UseStylesProps): string => determineStyles(props).marginTop,
    'margin-bottom': (props: UseStylesProps): string => determineStyles(props).marginBottom,
    'text-align': 'center',
    visibility: (props: UseStylesProps): string => determineStyles(props).visibility,
    width: (props: UseStylesProps): string => determineStyles(props).width,

  }
})
