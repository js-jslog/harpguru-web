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
    return (
      <div className='harpface'>
        { this.generateSquares(harpfaceValues) }
      </div>
    )
  }
}
