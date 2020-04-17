import ReactDOM from 'react-dom'
import React from 'react'

import * as serviceWorker from './serviceWorker'
import { HarpFace } from './HarpFace'

ReactDOM.render(
  <React.StrictMode>
    <HarpFace />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
