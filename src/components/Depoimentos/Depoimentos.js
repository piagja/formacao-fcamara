import React from 'react'
import DepoimentoCard from './DepoimentoCard/DepoimentoCard'
import { FiArrowUp } from 'react-icons/fi'
import './Depoimentos.css'

export default function Depoimentos () {
  return (
    <>

      <div className='container-footer'>
        <div className='footer-title'>
          <h1>DEPOIMENTOS</h1>
        </div>
        <div className='container-footer-cards'>

          <DepoimentoCard
            nome='Maria Paula de Souza' mensagem='“O Doação Nota 10 é maravilhoso! Sem esse projeto eu não teria condições de comprar o material para meus dois filhos.”'
          />
          <DepoimentoCard nome='José Luís de Almeida' mensagem='“Eu não sabia que existe esse projeto. Um amigo me indicou e hoje eu faço doações anuais para diversos alunos.” ' />

          <DepoimentoCard nome='Simone Prado Santiago' mensagem='“Obrigada, Doação Nota 10!!!! Todos os anos eu faço doação do material da minha filha de forma rápida e organizada.” ' />

        </div>
        <div className='seta-depoimento'>
          <a href='#header'><FiArrowUp size={50} /></a>
        </div>
      </div>
    </>
  )
}
