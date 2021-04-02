import React from 'react'
import CardDashboard from './CardDashboard/CardDashboard'
import './Dashboard.css'
import { Link } from 'react-router-dom'
const Logo = 'https://www.discoverscottishgardens.org/wp-content/uploads/2020/11/ACF-logo-placeholder.png'

export default function Dashboard () {
  const getData = JSON.parse(localStorage.getItem('Cadastro'))
  const getItem = JSON.parse(localStorage.getItem('CadastroItem'))
  let nome, email

  if (!getData) {
    nome = 'usuario'
    email = ''
  } else {
    nome = getData.nome
    email = getData.email
  }

  if (!getItem) {
    console.log('nao existe getItem')
  }

  return (
    <div className='container-dashboard'>

      <div className='dashboard-sidenav'>
        <img src={Logo} alt='Avatar' className='dashboard-logo' />

        <div className='dashboard-sidenav__info'>
          <br />
          <p>Bem vindo {nome}</p>
          <br />
          <p>Email: {email}</p>
          <br />
          <Link to='/'><button>Home</button></Link>
        </div>

        <div className='buttons'>
          <Link to='/cadastro'><button>Cadastre</button></Link>
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
          {getItem && getItem.map((item, index) => {
            return (
              <CardDashboard key={index} data={item} />
            )
          })}
        </div>

      </div>

    </div>
  )
}
