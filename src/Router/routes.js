import React from 'react'
import Header from '../components/Header/Header'
import Dashboard from '../components/Dashboard/Dashboard'
import Main from '../components/Main/Main'
import Depoimentos from '../components/Depoimentos/Depoimentos'
import Agradecimento from '../components/Agradecimento/Agradecimento'
import CadItems from '../components/CadItems/CadItems'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Header} />
      <Route exact path='/' component={Main} />
      <Route exact path='/' component={Depoimentos} />
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/cadastro' component={CadItems} />
        <Route path='/agradecimento' component={Agradecimento} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
