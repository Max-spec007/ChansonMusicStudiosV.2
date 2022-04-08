import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import App from './App'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home/Home'
// import Lessons from './components/Lessons/Lessons'

const appJsx = (
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/Home" component={Home} />
      <App />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(appJsx, document.getElementById('root'))
