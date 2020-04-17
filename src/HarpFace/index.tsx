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

const harpfaceValuesFlat = [
  undefined, '2', '3', '4',
  '5', '6', '7', '8',
  '9', '10', '11', '12',
  '13', '14', '15', '16'
]

export class HarpFace extends React.Component {
  renderSquare(x: number, y: number): ReactElement {
    return <Square value={harpfaceValues[x][y]}/>
  }
  render(): ReactElement {
    return (
      <div className='harpface'>
        {harpfaceValuesFlat.map(function (value, index) {
          return <Square key={index} value={value} />
        })}
      </div>
    )
  }
}
