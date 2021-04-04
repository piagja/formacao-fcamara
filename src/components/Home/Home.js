import React from 'react'
import Menina from '../../assets/img/menina-falando.svg'
import Arrow1 from '../../assets/img/arrow-1.png'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div className='container-home'>

      <div className='home-pagina'>

        <div className='seta'>
          <img src={Arrow1} alt='seta à esquerda' />
        </div>

        <div className='voltar'>
          <h3><Link to='/dashboard'>Voltar</Link></h3>
        </div>

        <div className='home-textos'>

          <div className='quem-somos-titulo'>
            <h2>Aprendemos com o presente para garantir um futuro de qualidade.</h2>
          </div>

          <div className='quem-somos-texto'>
            <p>Somos uma organização sem fins lucrativos que atua no estado
              de São Paulo. Nos unimos com a missão de promover a empatia e
              colaborar na educação de crianças e jovens brasileiros, que muitas
              vezes não conseguem comprar o essencial para estudar.
            </p>
            <p>Em tempos tão difíceis, crianças de todo o Brasil não têm
              condições de ter material apropriado para o estudo. Vamos ajudar?
            </p>
            <br />
            <p>Todo o processo é bem rápido e tranquilo, contamos com uma
              equipe de entregadores profissionais, responsáveis em retirar sua
              doação e levar até nossas crianças.
            </p>
            <br />
            <p>Nós sabemos o quanto presentes são importantes, então pode
              deixar que cuidaremos muito bem do seu.
            </p>
          </div>

          <div className='menina-falando'>
            <img src={Menina} alt='Menina falando ao megafone' />
          </div>

        </div>

      </div>

    </div>
  )
}
