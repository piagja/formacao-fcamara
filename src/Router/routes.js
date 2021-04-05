import React from 'react'
import Header from '../components/Header/Header'
import Dashboard from '../components/Dashboard/Dashboard'
import Main from '../components/Main/Main'
import Depoimentos from '../components/Depoimentos/Depoimentos'
import Agradecimento from '../components/Agradecimento/Agradecimento'
import CadItems from '../components/CadItems/CadItems'
import Login from '../components/Login/Login'
import QuemSomos from '../components/QuemSomos/QuemSomos'
import Contato from '../components/Contato/Contato'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path='/' component={Header} />
      <Route exact path='/' component={QuemSomos} />
      <Route exact path='/' component={Main} />
      <Route exact path='/' component={Depoimentos} />
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/cadastro' component={CadItems} />
        <Route path='/agradecimento' component={Agradecimento} />
        <Route path='/login' component={Login} />
        <Route path='/quem-somos' component={QuemSomos} />
        <Route path='/contato' component={Contato} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
