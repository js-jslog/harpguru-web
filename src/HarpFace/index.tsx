import React from 'react'
import type { ReactElement } from 'react'

import { Square } from './Square'
import './HarpFace.css'

const harpfaceValues = [
  [ '1','1','1','1','1','1','1','1','1','1','1' ],
  [ '2','2','2','2','2','2','2','2','2','2','2' ],
  [ '3','3','3','3','3','3','3','3','3','3','3' ],
  [ '4','4','4','4','4','4','4','4','4','4','4' ],
  [ '5','5','5','5','5','5','5','5','5','5','5' ],
]

type harpValue = string | undefined

export class HarpFace extends React.Component {
  generateSquares = (twoD: harpValue[][]): ReactElement[] => {
    const mapped = twoD.map(function (row: harpValue[], indexy) {
      return row.map(function (value: harpValue, indexx) {
        return <Square key={indexx + indexy} value={value} />
      })
    })
    const flattened = mapped.flat()
    return flattened
  }

  render(): ReactElement {
    const [ { length: columnCount } ] = harpfaceValues
    const gridTemplateColumnsValue = Array(columnCount).fill('auto').join(' ')
    const divStyle = {
      gridTemplateColumns: gridTemplateColumnsValue,
    }
    return (
      <div style={divStyle} className='harpface'>
        { this.generateSquares(harpfaceValues) }
      </div>
    )
  }
}
