import React from 'react'
import Menina from '../../assets/img/menina-papel.svg'

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import './Contato.css'

export default function Contato () {
  return (
    <div className='container-contato'>
      <div className='contato-voltar'>
        <span><Link to='/dashboard'>Voltar</Link></span>
      </div>

      <div className='contato-pagina'>
        <div className='contato-textos'>

          <div className='pergunta-resposta'>
            <div className='contato-perguntas-titulo'>
              <h3>Gostaria de doar fisicamente?</h3>
            </div>

            <div className='contato-respostas-titulo'>
              <h1>Vamos adorar te conhecer!</h1>
            </div>
          </div>

          <div className='contato-endereco'>
            <p>Endereço: Rua José Peroba, 23, sala 205, Jardim Primavera</p>
            <p>São Paulo - SP, CEP 22.222.222</p>
          </div>

          <div className='pergunta-resposta'>
            <div className='contato-perguntas-titulo'>
              <h3>Problemas com a plataforma ou entrega?</h3>
            </div>

            <div className='contato-respostas-titulo'>
              <h1>Nós te ajudamos!</h1>
            </div>
          </div>

          <div className='contato-endereco'>
            <p>Não hesite em entrar em contato conosco utilizando nosso número de telefone ou email de contato.</p>
            <br />
            <p><strong>(11) 3450-9080 ou (11) 99199-3520</strong></p>
            <br />
            <p><strong>Email: doacaonota10@gmail.com</strong></p>
            <br />
            <br />
            <p><strong>Nós, da Doação Nota 10, auxiliaremos com o que precisar!</strong></p>
          </div>

        </div>

        <div className='menina-papel'>
          <img src={Menina} alt='Menina segurando papel' />
        </div>

      </div>

    </div>
  )
}
