import React from 'react'
import './CardFooter.css'

const CardFooter = (props) => {
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
            <h2>{props.nome}</h2>
            <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab."</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CardFooter
