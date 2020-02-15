import React from 'react'
import logo from './logo.svg'
import './App.css'
import Item from './components/item'

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Item />
  </div>
)

export default App
