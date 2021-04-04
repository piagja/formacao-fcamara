import React from 'react'
import Logo from '../../assets/img/logo.svg'
import Criancas from '../../assets/img/menino-e-menina.svg'
import { FiArrowLeft } from 'react-icons/fi'
import './Agradecimento.css'
import { Link } from 'react-router-dom'

const Agradecimento = () => {
  return (
    <>
      <div className='confirmacao-logo'>
        <img src={Logo} alt='Logotipo Doação Nota 10 - Página de Agradecimentos' />
      </div>
      <div className='confirmacao-container'>

        <div className='confirmacao-areas'>

          <div className='confirmacao-area'>

            <div className='confirmacao-area-doacao'>
              <p>Agradecemos a sua doação!</p>
              <h2>Você é nota 10</h2>
              <h3>Seu código de doador:<br /> <strong>#{Math.floor(Math.random() * 9999)}</strong></h3>
            </div>

            <div className='confirmacao-area-orientacao'>
              <p>Analisaremos sua doação e em 24 horas um de nossos entregadores chegará até você.</p>
            </div>
            <div className='confirmacao-area-orientacao'>
              <p>Enviamos um email com a lista completa, intruções de envio e medidas de prevenção do COVID19.</p>
            </div>
            <div className='confirmacao-area-orientacao'>
              <p>Siga as orientações que separamos para você. Dúvidas, entrar em contato conosco em um dos canais de atendimento.</p>
            </div>

          </div>

          <div className='confirmacao-area-imagem'>
            <img src={Criancas} alt='Imagens de duas crianças comemorando a doação' />
          </div>

        </div>

        <div className='confirmacao-voltar'>
          <FiArrowLeft size={30} />
          <span><Link to='/dashboard'>Voltar</Link></span>
        </div>

      </div>
    </>
  )
}

export default Agradecimento
