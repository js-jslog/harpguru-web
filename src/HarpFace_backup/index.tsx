import { createUseStyles } from 'react-jss'
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

const useStyles = createUseStyles({
  harpface: {
    display: 'grid',
    'grid-template-columns': Array(harpfaceValues[0].length).fill('auto').join(' '),
  }
})
export function HarpFace(): ReactElement {
  const classes = useStyles()
  const generateSquares = (twoD: harpValue[][]): ReactElement[] => {
    const mapped = twoD.map(function (row: harpValue[], indexy) {
      return row.map(function (value: harpValue, indexx) {
        return <Square key={indexx + '' + indexy} value={value} />
      })
    })
    const flattened = mapped.flat()
    return flattened
  }

  return (
    <div id='harpface' className={classes.harpface}>
      { generateSquares(harpfaceValues) }
    </div>
  )
}
