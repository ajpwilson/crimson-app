import React from 'react'
import {
  BrowserRouter as Router, Route, Switch
} from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'
import './App.css'

import Header from './components/header'
import LaunchList from './components/launchList'
import LaunchDetail from './components/launchDetail'

const App = () => (
  <Router>
    <div className="App">
      <GlobalStyle/>
      <Header />
      <Main>
        <Switch>
          <Route exact path="/" component={LaunchList} />
          <Route path="/:flight_number" component={LaunchDetail} />
        </Switch>
      </Main>
    </div>
  </Router>
)

export default App

const GlobalStyle = createGlobalStyle`
  html {
    --black: #181C1F;
    --white: #fffcf9;
    --vape: #d7d7d7;
    --blue: #005288;
    --green: #3c763d;
    --leaf: #dff0d8;
    --red: #a94442;
    --apple: #f2dede;
    background: var(--vape);
    color: var(--black);
    font-weight: 100;
    font-size: 10px;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }

  a {
    color: var(--blue);
    text-decoration: none;
    font-weight: 600;
  }

  h2 {
    margin: 0 0 5px;
  }

  p {
    margin: 0 0 10px;
  }
`

// Component Styles
const Main = styled.div`
  padding: 1rem;
  max-width: 1000px;
  margin: 0 auto;
`
