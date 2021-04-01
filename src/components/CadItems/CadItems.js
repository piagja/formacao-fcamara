import React from 'react'
import './CadItems.css'

export default function CadItems () {
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

        <form>
          <div className='caixa'>
            <label for='caixa'>Não se esqueça de informar:</label>
            <input type='text' className='nome' required placeholder='Nome e Sobrenome' />
            <input type='text' className='escola' required placeholder='Escola' />
            <input type='text' className='serie' required placeholder='Serie' />
            <input type='text' className='email' required placeholder='Email' />
            <input type='text' className='telefone' required placeholder='Telefone ou Celular' />
            <input type='text' className='material' required placeholder='O que você precisa' />
          </div>

          <input type='submit' value='Bora Lá' className='botao' />

        </form>

      </div>

    </div>
  )
}
