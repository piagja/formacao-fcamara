import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai'
import CardDashboard from './CardDashboard/CardDashboard'
import Logo from '../../assets/img/logo.svg'
import './Dashboard.css'

const AvatarPerfil = 'https://www.discoverscottishgardens.org/wp-content/uploads/2020/11/ACF-logo-placeholder.png'

export default function Dashboard () {
  const getData = JSON.parse(localStorage.getItem('Cadastro'))
  const getItem = JSON.parse(localStorage.getItem('CadastroItem'))

  const [searchTerm, setSearchTerm] = useState('')

  const getSearchTerm = (event) => {
    setSearchTerm(event.target.value)
  }

  const searchingTerm = () => {
    console.log('input')
  }

  let nome, email

  if (!getData) {
    nome = 'Entre com a sua conta'
    email = ''
  } else {
    nome = getData.nome
    email = getData.email
  }

  return (
    <div className='container-dashboard'>

      <div className='dashboard-sidenav'>
        <img src={Logo} alt='Avatar' className='dashboard-logo' />

        <div className='dashboard-buttons'>
          <div className='dashboard-buttons-area'>
            <button><Link to='/'>Home</Link></button>
            <button><Link to='/cadastro'>Cadastre</Link></button>
            <button>Contato</button>
          </div>
        </div>

      </div>

      <div className='dashboard-main'>

        <div className='dashboard-main_top'>
          <img src={AvatarPerfil} alt='Avatar do Usuário Logado' />

          <div className='dashboard-navbar'>
            {nome}
            <p>Editar</p>
          </div>

          <div className='dashboard-navbar-check'>
            <AiOutlineCheck size={25} />
          </div>

        </div>
        <div className='dashboard-titulo-pesquisa'>
          <h1>Mural Beneficente.</h1>
          <h2>ESCOLHA UM ALUNO</h2>
          <input type='text' placeholder='Pesquise (Escola, Nome, Série...)' onChange={getSearchTerm} />
        </div>

        <div className='dashboard-cards'>
          {getItem && getItem.map((item, index) => {
            return (
              <CardDashboard key={index} data={item} search={searchingTerm()} />
            )
          })}
        </div>

      </div>

    </div>
  )
}
