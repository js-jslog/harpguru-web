import { createUseStyles } from 'react-jss'
import React from 'react'
import type { ReactElement } from 'react'
import type { Degree } from 'harpstrata'

type HoleInteractionProps = {
  degree: Degree;
  leftVoid: boolean;
}

const useStyles = createUseStyles({
  holeInteractionClass: {
    'border-color': 'black',
    border: '0px',
    'border-left': (props: HoleInteractionProps): string => (props.leftVoid ? '0px' : '1px'),
    'font-size': '30px',
    'text-align': 'centre',
  }
})

export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const classes = useStyles(props)
  return (
    <div className={classes.holeInteractionClass}>
      { props.degree.id }
    </div>
  )
}
