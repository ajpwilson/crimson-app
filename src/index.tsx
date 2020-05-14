
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './app'
import { LaunchProvider } from './context/index'

ReactDOM.render(
  <LaunchProvider>
    <App />
  </LaunchProvider>
  , document.getElementById('root'))
