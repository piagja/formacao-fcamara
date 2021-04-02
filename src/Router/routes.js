import React from 'react'
import Header from '../components/Header/Header'
import Dashboard from '../components/Dashboard/Dashboard'
import Main from '../components/Main/Main'
import Depoimentos from '../components/Depoimentos/Depoimentos'
import { BrowserRouter, Route } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/dashboard' component={Dashboard} />
      <Route exact path='/' component={Header} />
      <Route exact path='/' component={Main} />
      <Route exact path='/' component={Depoimentos} />
    </BrowserRouter>
  )
}

export default Routes
