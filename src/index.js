import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import * as serviceWorker from './serviceWorker'


const createRoot = () => {
  const root = window.document.createElement('div')

  root.style.width = '100%'
  root.style.height = '100%'
  return root
}

const renderAtCurrentScript = () => {
  const { currentScript } = window.document
  const root = createRoot()

  currentScript.parentNode.insertBefore(root, currentScript)
  ReactDOM.render(<App />, root)
}

renderAtCurrentScript()

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
