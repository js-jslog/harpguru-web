import React from 'react'
import type { ReactElement } from 'react'
import './Square.css'

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
