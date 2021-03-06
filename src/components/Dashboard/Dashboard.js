import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineCheck } from 'react-icons/ai'
import CardDashboard from './CardDashboard/CardDashboard'
import Logo from '../../assets/img/logo.svg'
import './Dashboard.css'

const AvatarPerfil = 'https://www.discoverscottishgardens.org/wp-content/uploads/2020/11/ACF-logo-placeholder.png'

export default function Dashboard () {
  const getData = JSON.parse(localStorage.getItem('Cadastro'))
  const getItem = JSON.parse(localStorage.getItem('CadastroItem'))

  let nome, email

  if (!getData) {
    nome = 'usuário'
    email = ''
  } else {
    nome = getData.nome
    email = getData.email
  }

  /**
   * lógica da procura dos cards
   */

  const [searchResults, setSearchResults] = useState(getItem)

  const updatedItem = useCallback((event) => {
    const results = searchResults.filter(item => item.mensagem.includes(event.target.value))
    setSearchResults(results)

    if (!event.target.value) {
      setSearchResults(getItem)
    }
  }, [searchResults, getItem])

  return (
    <div className='container-dashboard'>

      <div className='dashboard-sidenav'>
        <img src={Logo} alt='Avatar' className='dashboard-logo' />

        <div className='dashboard-buttons'>
          <div className='dashboard-buttons-area'>
            <Link to='/' className='dashboard-buttons-link'>Home</Link>
            <Link to='/cadastro' className='dashboard-buttons-link'>Cadastre</Link>
            <Link to='/contato'>Contato</Link>
          </div>
        </div>

      </div>

      <div className='dashboard-main'>

        <div className='dashboard-main_top'>
          <img src={AvatarPerfil} alt='Avatar do Usuário Logado' />

          <div className='dashboard-navbar'>
            <p>Bem vindo {nome}</p>
            <p>Email: {email}</p>
          </div>

          <div className='dashboard-navbar-check'>
            <AiOutlineCheck size={25} />
          </div>

        </div>
        <div className='dashboard-titulo-pesquisa'>
          <h1>Mural Beneficente.</h1>
          <h2>CONHEÇA UM ALUNO</h2>
          <input type='text' placeholder='Pesquise (Escola, Nome, Série...)' onChange={(e) => updatedItem(e)} />
        </div>

        <div className='dashboard-cards'>
          {searchResults && searchResults.map((item, index) => {
            return (
              <CardDashboard key={index} data={item} />
            )
          })}
        </div>

      </div>

    </div>
  )
}
