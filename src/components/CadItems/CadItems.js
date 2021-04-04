import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, Redirect } from 'react-router-dom'
import Logo from '../../assets/img/logo.svg'
import './CadItems.css'

export default function CadItems () {
  const [agradecimento, setAgradecimento] = useState(false)

  const defaultValues = {
    nome: '',
    escola: '',
    serie: '',
    email: '',
    telefone: '',
    mensagem: ''
  }

  const { register, handleSubmit, reset } = useForm({
    defaultValues
  })

  const getLocalStorage = (data) => {
    const dataItem = JSON.parse(localStorage.getItem('CadastroItem'))
    if (!dataItem) {
      localStorage.setItem('CadastroItem', JSON.stringify([data]))
      return ''
    } else {
      dataItem.push(data)
      localStorage.setItem('CadastroItem', JSON.stringify(dataItem))
    }
  }

  const onSubmit = (data, event) => {
    event.preventDefault()
    getLocalStorage(data)
    reset()
    setAgradecimento(true)
  }

  return (
    <>
      <div className='cadastro-logo'>
        <img src={Logo} alt='Logotipo Doação Nota Dez - Parte do Cadastro de Itens' />
        <Link to='/dashboard'>Voltar</Link>
      </div>

      <div className='cadastro-container'>
        <div className='cadastro-card'>
          <div className='cadastro-lista'>
            <h1>SUA LISTA</h1>
            <h2>Coloque as informações corretas nas caixas.</h2>

            <ul className='cadastro-lista-area'>
              <li className='cadastro-lista-area_items'>- Reveja os dados que você colocou</li>
              <li className='cadastro-lista-area_items'>- Se você é doador, coloque os itens que você possui para doar no campo "Mensagem"</li>
              <li className='cadastro-lista-area_items'>- Se você precisa de doação, seja sincero e direto no campo "Mensagem"</li>
              <li className='cadastro-lista-area_items'>- Verifique a disponibilidade de contato, email ou telefone</li>
              <li className='cadastro-lista-area_items'>- Não esqueça de deixar uma mensagem</li>
            </ul>
          </div>

          <div className='cadastro-form'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='cadastro-form-card'>
                <input type='text' name='nome' ref={register} required placeholder='Nome Completo' />
                <input type='text' name='escola' ref={register} required placeholder='Escola' />
                <input type='text' name='serie' ref={register} required placeholder='Série' />
                <input type='text' name='email' ref={register} required placeholder='Seu Email' />
                <input type='text' name='telefone' ref={register} required placeholder='Seu Telefone' />
                <input type='text' name='mensagem' ref={register} required placeholder='Mensagem' />
              </div>
              <div className='cadastro-button'>
                <input type='submit' value='Cadastrar' />
              </div>

            </form>

            {agradecimento && <Redirect to='/agradecimento' />}
          </div>

        </div>

      </div>
    </>
  )
}
