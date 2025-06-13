import React from 'react'
import style from'./Componente1.module.css'

const Componente1 = () => {
    let estilo = {
        backgroundColor:'green',
        color:'white',
        padding:'15px'
    }
  return (
    <div>
      <h1 className={style.paragrafo}>Esse é o título 2</h1>
      <p style={{backgroundColor:'orange',color:'black'}}>Esse é css de componente</p>
      <h2 style={estilo}>CSS apenas desse componente</h2>

      <h1 className={style.titulo}>Novo título</h1>
    </div>
  )
}

export default Componente1
