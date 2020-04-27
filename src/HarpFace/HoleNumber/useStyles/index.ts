import { createUseStyles } from 'react-jss'

import type { Theme } from '../../index'

type Styles = {
  readonly fontSize: string;
  readonly height: string;
  readonly marginTop: string;
  readonly marginBottom: string;
  readonly width: string;
}

const determineStyles = (props: Theme): Styles => {
  const { sizesMap } = props

  const fontSize = `${sizesMap[4]}px`
  const height = `${sizesMap[5]}px`
  const marginTop = `${sizesMap[2]}px`
  const marginBottom = `${sizesMap[2]}px`
  const width = `${sizesMap[6]}px`

  return { fontSize, height, marginTop, marginBottom, width }
}

export const useStyles = createUseStyles({
  holeInteractionClass: {
    'border-width': '0px',
    'background-color': 'transparent',
    color: 'black',
    'font-size': (props: Theme): string => determineStyles(props).fontSize,
    height: (props: Theme): string => determineStyles(props).height,
    margin: 'auto',
    'margin-top': (props: Theme): string => determineStyles(props).marginTop,
    'margin-bottom': (props: Theme): string => determineStyles(props).marginBottom,
    'text-align': 'center',
    width: (props: Theme): string => determineStyles(props).width,
  }
})
