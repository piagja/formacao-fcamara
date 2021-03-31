import React from 'react'
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import { BrowserRouter, Route } from 'react-router-dom'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/dashboard' component={Dashboard} />
      <Route exact path='/' component={Header} />
      <Route exact path='/' component={Main} />
      <Route exact path='/' component={Footer} />
    </BrowserRouter>
  )
}

export default Routes
