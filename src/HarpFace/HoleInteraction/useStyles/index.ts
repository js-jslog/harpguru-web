import { createUseStyles } from 'react-jss'

import type { UseStylesProps } from '../types'
import type { HoleInteractionStyle } from '../styles'

const determineStyles = (props: UseStylesProps): HoleInteractionStyle => {
  const { styles: { holeInteractionStyles } } = props
  const { positionFacts: { thisDegree, thisInteraction, isActive }} = props

  const styles = (thisInteraction ? holeInteractionStyles[thisInteraction.id] : {borderRadius: '0', color: 'transparent', backgroundColor: 'transparent', boxShadow: '0', fontSize: '0', height: '0', marginTop: '0', marginBottom: '0', width: '0'})

  const { borderRadius } = styles
  const backgroundColor = (isActive ? styles.backgroundColor : 'transparent')
  const boxShadow = (isActive ? styles.boxShadow : '0')
  const color = (isActive ? styles.color : 'black')
  const { fontSize } = styles
  const { height } = styles
  const { marginTop } = styles
  const { marginBottom } = styles
  const visibility = (thisDegree === undefined ? 'hidden' : 'visible')
  const { width } = styles

  return { borderRadius, backgroundColor, boxShadow, color, fontSize, height, marginTop, marginBottom, visibility, width }
}

export const useStyles = createUseStyles({
  holeInteractionClass: {
    'border-radius': (props: UseStylesProps): string => determineStyles(props).borderRadius,
    'border-width': '0px',
    'box-shadow': (props: UseStylesProps): string => determineStyles(props).boxShadow,
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
