import React from 'react'
import DepoimentoCard from './DepoimentoCard/DepoimentoCard'
import './Depoimentos.css'

export default function Depoimentos () {
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
    </div>
  )
}
