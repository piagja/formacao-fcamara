import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function Login () {
  return (
    <div className='login-container'>

      <div className='login-form'>

        <div className='login-titulo'>
          <h1>Bem vindo (a)!</h1>
        </div>

        <div className='login-input'>
          <input type='text' placeholder='Digite seu email' required />
          <input type='password' placeholder='Digite sua senha' required />
        </div>

        <div className='login-botoes'>
          <button type='submit'><Link to='/dashboard'>Continuar</Link></button>
          <Link to='/'>Voltar</Link>
        </div>

      </div>

    </div>
  )
}
