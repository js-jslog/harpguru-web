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
  render(): ReactElement {
    return (
      <div className='harpface'>
        <div className='harprow'>
          <Square value={harpfaceValues[0][0]}/>
          <Square value={harpfaceValues[0][1]}/>
          <Square value={harpfaceValues[0][2]}/>
          <Square value={harpfaceValues[0][3]}/>
        </div>
        <div className='harprow'>
          <Square value={harpfaceValues[1][0]}/>
          <Square value={harpfaceValues[1][1]}/>
          <Square value={harpfaceValues[1][2]}/>
          <Square value={harpfaceValues[1][3]}/>
        </div>
        <div className='harprow'>
          <Square value={harpfaceValues[2][0]}/>
          <Square value={harpfaceValues[2][1]}/>
          <Square value={harpfaceValues[2][2]}/>
          <Square value={harpfaceValues[2][3]}/>
        </div>
        <div className='harprow'>
          <Square value={harpfaceValues[3][0]}/>
          <Square value={harpfaceValues[3][1]}/>
          <Square value={harpfaceValues[3][2]}/>
          <Square value={harpfaceValues[3][3]}/>
        </div>
      </div>
    )
  }
}
