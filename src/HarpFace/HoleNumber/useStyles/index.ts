import { createUseStyles } from 'react-jss'

import { HoleNumberStyles } from '../styles'

export const useStyles = createUseStyles({
  holeInteractionClass: {
    'border-width': '0px',
    'background-color': 'transparent',
    color: 'black',
    'font-size': (props: HoleNumberStyles): string => props.fontSize,
    height: (props: HoleNumberStyles): string => props.height,
    margin: 'auto',
    'margin-top': (props: HoleNumberStyles): string => props.marginTop,
    'margin-bottom': (props: HoleNumberStyles): string => props.marginBottom,
    'text-align': 'center',
    width: (props: HoleNumberStyles): string => props.width,
  }
})
