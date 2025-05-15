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
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, distinctio. Doloremque excepturi sapiente possimus voluptates deleniti blanditiis repellendus eum, neque odit quam quod magni deserunt nobis sit. Rem, explicabo distinctio!</p>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil
