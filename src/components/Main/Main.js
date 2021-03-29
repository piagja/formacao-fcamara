import React from 'react'
import './Main.css'

export default function Main () {
  return (
  /**
    * dentro da div, pode inserir o código HTML que quiser
    * para estilizar como CSS, de forma simples, você coloca
    * className ao invés de class para usar como seletor no CSS
    * exemplo: <div className='container'></div>
    * aí no CSS você usa como seletor de classes normalmente
    * .container { ... }
    * ------------------------------------------------------------
    * Pode abrir o Header.js e o Header.css para se guiar também
    */
    <div className='container-main'>

      <div className='valores-imagem'>

        <div className='valores'>
          <p>Valores</p>
          <p>Valores</p>
          <p>Valores</p>
        </div>

        <div className='imagem'>
          <img src='https://bslacademiadelideres.com.br/wp-content/uploads/2020/07/placeholder.png?v=9a5864c8040a' className='img-valores' alt='Imagem valores' />
        </div>

      </div>

      <div className='descricao-ganhar'>

        <div className='descricao-processo'>
          <p>Descrição Processo</p>
          {/* alterar isso dps */}
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          {/* alterar isso dps */}
        </div>

        <div className='a-ganhar'>
          <p>O que tem a ganhar</p>
          {/* alterar isso dps */}
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          <br />
          <hr />
          {/* alterar isso dps */}
        </div>

      </div>

    </div>
  )
}
