import React from 'react'
import Menina from '../../assets/img/menina-com-mochila.svg'
import './Main.css'

export default function Main () {
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
    <div className='container-main'>

      <div className='main-como-funciona'>

        <div className='como-funciona'>
          <p>Como Funciona</p>
          <h1>Sua Doação é muito importante!</h1>
          <br />
          <img src={Menina} alt='Menina segurando mochila na frente' />
        </div>

        <div className='como-funciona-doador'>
          <div className='doador'>
            <p><strong>Você é doador?</strong></p>
            <p>Então siga nosso passo a passo para que o material chegue até nosso aluno em segurança.</p>
          </div>

          <div className='doador-tutorial'>
            <ul className='doador-lista'>
              <li className='doador-lista__item'>Realize seu cadastro na plataforma.</li>
              <li className='doador-lista__item'>Escolha um dos nosso alunos no Mural Beneficente.</li>
              <li className='doador-lista__item'>Confirme sua doação.</li>
              <li className='doador-lista__item'>Você receberá a confirmação no seu e-mail.</li>
              <li className='doador-lista__item'>Guarde e organize tudo dentro do que estiver a sua disposição (caixas, sacolas...)</li>
              <li className='doador-lista__item'>Você terá 15 dias úteis para realizar a entrega em nossa sede.
                Ao finalizar esse prazo e não ocorrrer a doação, o aluno escolhido será recolocado no Quadro de Beneficente. Sua colaboração é muito importante.
              </li>
            </ul>
          </div>

          <div className='como-funciona-cadastrar-items'>
            <div className='como-funciona-cadastrar-items__titulo'>
              <strong>Para Cadastrar sua Lista de Materiais</strong>
            </div>

            <div className='como-funciona-cadastrar-items__descricao'>
              Se você está procurando onde fazer sua lista de materiais,
              então pedimos que primeiramente realize o cadastro em
              nossa platafiorma. Não se preocupe, suas informações estarão seguras.
            </div>
            <br />
            <span>
              Após realizar o cadastro, clique no botão Cadastre sua Lista.
              Informe o que precisa. Ao finalizar clique em Enviar.
            </span>
          </div>

        </div>

      </div>

    </div>
  )
}
