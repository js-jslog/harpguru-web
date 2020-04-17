import React from 'react'
import type { ReactElement } from 'react'

export class Square extends React.Component {
  render(): ReactElement {
    return (
      <button className="square">
        this is a square
      </button>
    )
  }
}
