import { createUseStyles } from 'react-jss'
import React from 'react'
import type { ReactElement } from 'react'
import type { Degree } from 'harpstrata'

type HoleInteractionProps = {
  degree: Degree;
}

const useStyles = createUseStyles({
  holeInteractionClass: {
    'border-color': 'black',
    border: '0px',
    'border-left': '1px',
    'font-size': '30px',
    'text-align': 'centre',
  }
})

export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  const classes = useStyles()
  return (
    <div className={classes.holeInteractionClass}>
      { props.degree.id }
    </div>
  )
}
