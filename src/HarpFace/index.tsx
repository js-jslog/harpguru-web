import React from 'react'
import type { ReactElement } from 'react'

import { Square } from './Square'
import './HarpFace.css'

const harpfaceValues = [
  [ undefined, '2', '3', '4' ],
  [ '5', '6', '7', '8' ],
  [ '9', '10', '11', '12' ],
  [ '13', '14', '15', '16' ]
]

export class HarpFace extends React.Component {
  renderSquare(x: number, y: number): ReactElement {
    return <Square value={harpfaceValues[x][y]}/>
  }
  render(): ReactElement {
    return (
      <div className='harpface'>
        <div className='harprow'>
          { this.renderSquare(0,0) }
          { this.renderSquare(0,1) }
          { this.renderSquare(0,2) }
          { this.renderSquare(0,3) }
        </div>
        <div className='harprow'>
          { this.renderSquare(1,0) }
          { this.renderSquare(1,1) }
          { this.renderSquare(1,2) }
          { this.renderSquare(1,3) }
        </div>
        <div className='harprow'>
          { this.renderSquare(2,0) }
          { this.renderSquare(2,1) }
          { this.renderSquare(2,2) }
          { this.renderSquare(2,3) }
        </div>
        <div className='harprow'>
          { this.renderSquare(3,0) }
          { this.renderSquare(3,1) }
          { this.renderSquare(3,2) }
          { this.renderSquare(3,3) }
        </div>
      </div>
    )
  }
}
