import ReactDOM from 'react-dom'
import React from 'react'

import * as serviceWorker from './serviceWorker'
import { getAHarp } from './harpstrataimport'
import { HarpFace } from './HarpFace'

const { degreeMatrix } = getAHarp()

ReactDOM.render(
  <React.StrictMode>
    <HarpFace degreeMatrix={degreeMatrix}/>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
