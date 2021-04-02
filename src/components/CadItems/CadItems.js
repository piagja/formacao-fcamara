import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Redirect } from 'react-router-dom'
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
    <div className='exterior-pagina'>

      <div className='exterior-logo'>
        <img
          src='https://www.discoverscottishgardens.org/wp-content/uploads/2020/11/ACF-logo-placeholder.png'
          alt='avatar'
          className='menu-logo'
        />
      </div>

      <div className='interior-pagina'>

        <div className='titulo-principal'>
          <h2>Nos informe sobre você</h2>
        </div>

        <div className='subtitulo-principal'>
          <p>Coloque nesta caixa suas informações de contato, nome, escola e série.</p>
          <p>Ao fim, nos diga o que você precisa e sua camisa estará pronta!</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='caixa'>
            <label for='caixa'>Não se esqueça de informar:</label>
            <input type='text' name='nome' ref={register} className='nome' required placeholder='Nome e Sobrenome' />
            <input type='text' name='escola' ref={register} className='escola' required placeholder='Escola' />
            <input type='text' name='serie' ref={register} className='serie' required placeholder='Serie' />
            <input type='text' name='email' ref={register} className='email' required placeholder='Email' />
            <input type='text' name='telefone' ref={register} className='telefone' required placeholder='Telefone' />
            <input type='text' name='mensagem' ref={register} className='material' required placeholder='O que você precisa' />
          </div>

          <input type='submit' value='Bora Lá' className='botao' />

        </form>

        {agradecimento && <Redirect to='/agradecimento' />}
      </div>

    </div>
  )
}
