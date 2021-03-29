import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render () {
    return (
      <div className='container'>

        <div className='area-login'>
          <p>Já faz parte da nossa família?</p>
          <p>Então sinta-se Bem Vindo</p>
          <button>Faça seu Login</button>
        </div>

        <div className='area-cadastro'>
          <form className='form-cadastro'>
            <h3>Para poder aproveitar nossa plataforma gratuita ao máximo, pedimos que faça um cadastro.</h3>
            <br />
            <h2>É rápido e prático!</h2>
            <input type='text' name='nome' placeholder='Insira seu nome' />
            <input type='email' name='email' placeholder='Insira seu email' />
            <input type='password' name='senha' placeholder='Insira seu senha' />
            <button type='submit'>Cadastrar</button>
          </form>
        </div>

      </div>
    )
  }
}
