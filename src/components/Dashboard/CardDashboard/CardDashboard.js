import React from 'react'
import './CardDashboard.css'

export default function CardDashboard (props) {
  const { nome, email, escola, mensagem, serie, telefone } = props.data
  console.log(props)

  return (
    <div className='quadro'>
      <div className='quadro-info'>
        <div className='quadro-itens'>
          <div className='quadro-itens-texto'>
            <p>{nome}</p>
            <p>{email}</p>
            <p>{escola}</p>
            <p>{serie}</p>
            <p>{mensagem}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
