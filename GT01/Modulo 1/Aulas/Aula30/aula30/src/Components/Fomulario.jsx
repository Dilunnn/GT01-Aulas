import React from 'react'
import style from './Fomulario.module.css'
import { useState } from 'react'
const Fomulario = () => {
    let [nome,setNome] = useState('')
    let [email,setemail] = useState('')
  return (
    <div>
        <h1>Formulario</h1>
        <form>
            <label htmlFor="nome">Nome:</label>
            <input onChange={(e) => setNome(e.target.value)} type="text" name='nome' id='nome' />
            <br/>

            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
        </form>
        <h1>Nome digitado = {nome}</h1>
    </div>
  )
}

export default Fomulario
