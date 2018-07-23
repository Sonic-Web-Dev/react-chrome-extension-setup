import React from 'react'
import ReactDOM from 'react-dom'
import Setup from '../components/Setup'
import defaultState from '../defaults'
import '../index.css'

chrome.storage.local.get(storedState => {
  const initialState = { ...defaultState, ...storedState }

  ReactDOM.render(<Setup {...initialState} />, document.getElementById('root'))
})
