import { useState, useEffect } from 'react'
import React from 'react'

const TodosUser = () => {
    
  let [usuarios,setusuarios] = useState([])

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const resposta = await fetch('http://localhost:3000/usuarios')
        const dados = await resposta.json()
        setusuarios(dados)
        console.log(dados)
        
      } catch (error) {
        console.log(error);
      }
    }
    buscarUsuario()
  },[])
  
  
  return (
    <div>
      <h1>Aqui está a lista de usuários</h1>
     <ul>
      {usuarios.map(usuarios => (
        <li key={usuarios.id}>id: {usuarios.id}, Nome: {usuarios.nome}, tipo: {usuarios.tipo}</li>
      ))}
     </ul>
    </div>
  )
}

export default TodosUser
