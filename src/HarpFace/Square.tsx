import React from 'react'
import type { ReactElement } from 'react'

interface SquareInputProps {
  value: string;
}

export class Square extends React.Component<SquareInputProps> {
  render(): ReactElement {
    return (
      <div className="square">
        {this.props.value}
      </div>
    )
  }
}
