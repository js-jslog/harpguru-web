import ReactDOM from 'react-dom'
import React from 'react'

import * as serviceWorker from './serviceWorker'
import { Square } from './HarpFace/Square'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Square value='test'/>
      <Square value='test'/>
      <Square value='test'/>
      <Square value='test'/>
    </div>
    <div>
      <Square value='test'/>
      <Square value='test'/>
      <Square value='test'/>
      <Square value='test'/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
