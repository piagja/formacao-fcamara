import React from 'react'
import './DepoimentoCard.css'

const logo = 'https://www.discoverscottishgardens.org/wp-content/uploads/2020/11/ACF-logo-placeholder.png'

const DepoimentoCard = (props) => {
  return (
    <div className='cards-container'>

      <div className='cards'>
        <div className='card-avatar'>
          <img src={logo} alt='Logo do Card de Depoimentos' />
        </div>

        <div className='card-descricao'>
          <p>{props.nome}</p>
          <div className='card-descricao__titulo'>
            {props.mensagem}
          </div>
        </div>
      </div>

    </div>
  )
}

export default DepoimentoCard
