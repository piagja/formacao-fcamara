import React from 'react'
import CardFooter from './CardFooter/CardFooter'
import './Footer.css'

export default function Footer () {
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
    <div>
      <div className='footer-title'>
        <h1>Depoimentos</h1>
      </div>
      <div className='container-footer-cards'>

        <CardFooter nome='Gabriel' />
        <CardFooter nome='Pedro' />
        <CardFooter nome='Catarina' />
      </div>

      <div className='footer-entrega'>
        <h2>Realize sua entrega aqui</h2>
        <div className='footer-entrega_area'>
          <hr />
          <hr />
          <hr />
          <hr />
          <hr />
        </div>
      </div>
    </div>
  )
}
