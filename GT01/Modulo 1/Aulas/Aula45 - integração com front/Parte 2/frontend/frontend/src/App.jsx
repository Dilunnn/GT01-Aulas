import { useState, useEffect } from 'react'
import './App.css'

function App() {

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
    <>
     <h1>Aqui está a lista de usuários</h1>
     <ul>
      {usuarios.map(usuarios => (
        <li key={usuarios.id}>Nome: {usuarios.nome}, tipo: {usuarios.tipo}</li>
      ))}
     </ul>
    </>
  )
}

export default App
