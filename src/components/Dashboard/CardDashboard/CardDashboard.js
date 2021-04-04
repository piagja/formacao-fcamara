import React from 'react'
import LogoCrianca from '../../../assets/img/mock-aluno.png'
import './CardDashboard.css'

export default function CardDashboard (props) {
  const { nome, email, escola, mensagem, serie } = props.data

  return (
    <div className='quadro'>
      <div className='quadro-info'>
        <img src={LogoCrianca} alt='Logo de uma criança sorrindo em um card com informações' />
        <div className='quadro-itens'>
          <div className='quadro-itens-texto'>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Escola:</strong> {escola}</p>
            <p><strong>Série:</strong> {serie}</p>
            <br />
            <p><strong>Mensagem:</strong> {mensagem}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
