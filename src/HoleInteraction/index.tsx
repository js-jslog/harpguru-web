import { createUseStyles } from 'react-jss'
import React from 'react'
import type { ReactElement } from 'react'
import type { Degree } from 'harpstrata'

type HoleInteractionProps = {
  degree: Degree | undefined;
  leftVoid: boolean;
}

const determineLeftBorder = (props: HoleInteractionProps): string => {
  const { degree, leftVoid } = props
  return (leftVoid || degree === undefined ? '0px' : '1px')
}

const determineColor = (props: HoleInteractionProps): string => {
  const { degree } = props
  return (degree === undefined ? 'white' : 'black')
}

const useStyles = createUseStyles({
  holeInteractionClass: {
    color: (props: HoleInteractionProps): string => determineColor(props),
    'border-color': 'black',
    border: '0px',
    'border-left': (props: HoleInteractionProps): string => determineLeftBorder(props),
    'font-size': '30px',
    'text-align': 'center',
  }
})

export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const classes = useStyles(props)
  return (
    <div className={classes.holeInteractionClass}>
      { (props.degree && props.degree.id) || '/' }
    </div>
  )
}
