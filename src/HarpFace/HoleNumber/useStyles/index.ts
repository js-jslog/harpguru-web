import { createUseStyles } from 'react-jss'

import { HoleNumberStyle } from '../styles'

export const useStyles = createUseStyles({
  holeInteractionClass: {
    'border-width': '0px',
    'background-color': 'transparent',
    color: 'black',
    'font-size': (props: HoleNumberStyle): string => props.fontSize,
    height: (props: HoleNumberStyle): string => props.height,
    margin: 'auto',
    'margin-top': (props: HoleNumberStyle): string => props.marginTop,
    'margin-bottom': (props: HoleNumberStyle): string => props.marginBottom,
    'text-align': 'center',
    width: (props: HoleNumberStyle): string => props.width,
  }
})
