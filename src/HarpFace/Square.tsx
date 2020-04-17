import React from 'react'
import type { ReactElement } from 'react'
import './Square.css'

interface SquareInputProps {
  value: string | undefined;
}

export class Square extends React.Component<SquareInputProps> {
  render(): ReactElement {
    const { props: { value } } = this
    // The css grid layout being used at the moment requires
    // a non-null text value for the cell to be displayed
    const contents = value || '/'
    let className = 'square'
    if (value === undefined) className += ' no-contents'
    return (
      <div className={className}>
        { contents }
      </div>
    )
  }
}
