import React from 'react'
import style from './Perfil.module.css'

const Perfil = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6 border bgperfil text-center">
            <img className={style.imagemdeperfil} src="./foto-de-perfil.jpeg" alt="foto de perfil" />
            <h2>Rodrigo viana</h2>
            <h3 className='h4'>Desenvolvedor full-stack</h3>
            <p>
              📍 Fortaleza – CE | 🎓 Estudante de TI
              Atualmente cursando o programa Geração Tech, transformo ideias em aplicações web robustas e escaláveis, com experiência em front-end (HTML5, CSS3, JavaScript/React) e back-end (Node.js, MySQL).
            </p>

            <p>⚡ Adaptável, colaborativo e movido por desafios; busco oportunidades para aplicar meus aprendizados em equipes ágeis e entregar soluções centradas no usuário.</p>

            <p>📩 Vamos nos conectar? rodrigoviana2203@gmail.com</p>


          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil
