import { createUseStyles } from 'react-jss'
import { IsActiveIds } from 'harpstrata'

import type { UseStylesProps } from '../types'
import type { HoleInteractionStyles } from '../styles'

const determineStyles = (props: UseStylesProps): HoleInteractionStyles => {
  const { styles: { holeInteractionStylesMap } } = props
  const { positionFacts: { thisDegree, thisInteraction, thisIsActive }} = props
  const isActive = (thisIsActive && thisIsActive === IsActiveIds.Active)

  const styles = (thisInteraction ? holeInteractionStylesMap[thisInteraction.id] : holeInteractionStylesMap['undefined'])

  const { borderRadius } = styles
  const backgroundColor = (isActive ? styles.backgroundColor : 'transparent')
  const boxShadow = (isActive ? styles.boxShadow : 'none')
  const color = (isActive ? styles.color : '#ddd')
  const { fontSize } = styles
  const { height } = styles
  const { marginTop } = styles
  const { marginBottom } = styles
  const visibility = (thisDegree === undefined ? 'hidden' : styles.visibility)
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
    transition: 'color 0.5s, background-color 0.5s, box-shadow 0.5s',
  }
})
