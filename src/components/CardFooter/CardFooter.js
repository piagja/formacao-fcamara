import React from 'react'
import './CardFooter.css'

const CardFooter = () => {
  return (
    <div className='card'>
      <div className='card-depoimento'>

        <div className='card-items'>
          <img
            src='https://www.discoverscottishgardens.org/wp-content/uploads/2020/11/ACF-logo-placeholder.png'
            alt='avatar'
            className='card-avatar__image'
          />
          <div className='card-items__profile'>
            <p>Mensagem</p>
            <p>Nome</p>
            <p>Idade</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardFooter
