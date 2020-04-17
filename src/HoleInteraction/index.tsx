import React from 'react'
import type { ReactElement } from 'react'
import type { Degree } from 'harpstrata'

type HoleInteractionProps = {
  degree: Degree;
}

export function HoleInteraction(props: HoleInteractionProps): ReactElement {
  return (
    <div>
      { props.degree.id }
    </div>
  )
}
