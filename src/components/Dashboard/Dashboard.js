import React from 'react'
import CardDashboard from './CardDashboard/CardDashboard'
import { Link } from 'react-router-dom'
import './Dashboard.css'

export default function Dashboard () {
  const getNome = JSON.parse(localStorage.getItem('Cadastro'))

  return (
    <div className='container-dashboard'>

      <div className='dashboard-sidenav'>
        <img src='https://www.discoverscottishgardens.org/wp-content/uploads/2020/11/ACF-logo-placeholder.png' alt='Avatar' className='dashboard-logo' />

        <div className='dashboard-sidenav__info'>
          <br />
          <p>Bem vindo {getNome.nome}</p>
          <br />
          <p>{getNome.email}</p>
          <br />
          <Link to='/'><button>Home</button></Link>
        </div>

        <div className='buttons'>
          <button>Cadastre</button>
          <button>Contato</button>
        </div>

      </div>

      <div className='dashboard-main'>

        <div className='dashboard-main_top'>
          <h1>Bem Vindo ao nosso Painel Beneficente</h1>
          <h2>Escolha algum card para mais informações</h2>
          <input type='text' placeholder='Realize sua busca rápida' />
        </div>

        <div className='dashboard-cards'>
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
        </div>

      </div>

    </div>
  )
}
