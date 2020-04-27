import ReactDOM from 'react-dom'
import React from 'react'

import * as serviceWorker from './serviceWorker'
import { HarpUI } from './HarpUI'
import { getTheme } from './HarpFace'

const theme = getTheme()

ReactDOM.render(
  <React.StrictMode>
    <HarpUI theme={theme} />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
