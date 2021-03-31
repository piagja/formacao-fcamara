import React, { useState, useEffect } from 'react'
import { data } from '../../services/api'
import { useForm } from 'react-hook-form'

import './Header.css'

export default function Header () {
  const defaultValues = {
    nome: '',
    email: '',
    telefone: '',
    senha: ''
  }

  const { register, handleSubmit, reset } = useForm({
    defaultValues
  })

  const onSubmit = data => {
    localStorage.setItem('Cadastro', JSON.stringify(data))
    console.log(data)
    reset()
  }

  return (
    <div className='container'>

      <div className='area-login'>
        <p>Já faz parte da nossa família?</p>
        <p>Então sinta-se Bem Vindo</p>
        <button>Faça seu Login</button>
      </div>

      <div className='area-cadastro'>
        <form className='form-cadastro' onSubmit={handleSubmit(onSubmit)}>
          <h3>Para poder aproveitar nossa plataforma gratuita ao máximo, pedimos que faça um cadastro.</h3>
          <br />
          <h2>É rápido e prático!</h2>
          <input type='text' name='nome' ref={register} placeholder='Insira seu nome' />
          <input type='email' name='email' ref={register} placeholder='Insira seu email' />
          <input type='text' name='telefone' ref={register} placeholder='Insira seu telefone' />
          <input type='password' name='senha' ref={register} placeholder='Insira seu senha' />
          <button type='submit'>Cadastrar</button>
        </form>
      </div>

    </div>
  )
}
