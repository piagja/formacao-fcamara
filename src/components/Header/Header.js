import React from 'react'
import Menino from '../../assets/img/menino-header.svg'
import Logo from '../../assets/img/logo.svg'

import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'

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
    <>
      <div className='logo'>
        <img src={Logo} alt='Logotipo do website Doação Nota 10' />
      </div>
      <div className='container'>

        <div className='area-login'>
          <p>Já faz parte da nossa família?</p>
          <p>Então sinta-se Bem Vindo</p>
          <Link to='/dashboard'><button>Faça seu Login<FiArrowRight size={30} /></button></Link>
        </div>

        <div className='area-imagem'>
          <div className='imagem'>
            <img src={Menino} alt='Imagem de um menino rabiscando um coração em um muro' />
          </div>
        </div>

        <div className='area-cadastro'>
          <form className='form-cadastro' onSubmit={handleSubmit(onSubmit)}>
            <h3><strong>Cadastro</strong> para aproveitar nossa plataforma ao máximo</h3>
            <br />
            <input type='text' name='nome' ref={register} placeholder='Insira seu nome' />
            <input type='email' name='email' ref={register} placeholder='Insira seu email' />
            <input type='text' name='telefone' ref={register} placeholder='Insira seu telefone' />
            <input type='password' name='senha' ref={register} placeholder='Insira seu senha' />
            <button type='submit'>Vamos la <FiArrowRight size={30} /></button>
          </form>
        </div>

      </div>
    </>
  )
}
