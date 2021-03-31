import React, { useState, useEffect } from 'react'
import './Dashboard.css'

export default function Dashboard () {
  return (
    <div className='container-dashboard'>

      <div className='menu-esquerdo'>
        <nav className='menu-barra'>
        <img
            src='https://www.discoverscottishgardens.org/wp-content/uploads/2020/11/ACF-logo-placeholder.png'
            alt='avatar'
            className='menu-logo'
          />
         <ul className='menu-icones'>
            <li><button className='menu-icones-cadastre'>Cadastre sua lista</button></li>
            <li><button className='menu-icones-home'>Home</button></li>
            <li><button className='menu-icones-contato'>Contato</button></li>
          </ul>
        </nav>
      </div>

      <div className='cabecalho'>

        <div className='texto'>
          <h2>Bem-vindo ao nosso Painel Beneficiente!</h2> 
          <br></br>
          <h2>Escolha seu aluno:</h2>           
        </div>

        <div className='campo-pesquisa'>
          <textarea>Pesquise (Escola, Nome, Série...)</textarea>
        </div>

      </div>

      <div className='avatar-dashboard'>
          <img
              src='https://www.discoverscottishgardens.org/wp-content/uploads/2020/11/ACF-logo-placeholder.png'
              alt='avatar'
              className='card-avatar__image'
            />
            <p>#0000</p>
            <p>Nome da pessoa</p>
            <p>Email</p>
            <p>Editar</p>          
      </div>

        <div className='quadro'>
          <div className='quadro-info'>
            <div className='quadro-itens'>
                <div className='quadro-itens-texto'>
                  <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab."</p>
                </div>
            </div>
          </div>
        </div>

        <div className='quadro'>
          <div className='quadro-info'>
            <div className='quadro-itens'>
                <div className='quadro-itens-texto'>
                  <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab."</p>
                </div>
            </div>
          </div>
        </div>

        <div className='quadro'>
          <div className='quadro-info'>
            <div className='quadro-itens'>
                <div className='quadro-itens-texto'>
                  <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab."</p>
                </div>
            </div>
          </div>
        </div>

        <div className='quadro'>
          <div className='quadro-info'>
            <div className='quadro-itens'>
                <div className='quadro-itens-texto'>
                  <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab."</p>
                </div>
            </div>
          </div>
        </div>

        <div className='quadro'>
          <div className='quadro-info'>
            <div className='quadro-itens'>
                <div className='quadro-itens-texto'>
                  <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab."</p>
                </div>
            </div>
          </div>
        </div>
        
        {/* <div className='quadro'>
          <div className='quadro-info'>
            <div className='quadro-itens'>
                <div className='quadro-itens-texto'>
                  <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab."</p>
                </div>
            </div>
          </div>
        </div> */}
            
    </div>
  )
}