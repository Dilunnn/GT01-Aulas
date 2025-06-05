
import { useState } from 'react'
import './App.css'
import TodosUser from './Components/TodosUser'

function App() {
  const [Mostrar, setMostrar] = useState(false) 
  const [Id,setId] = useState('')
  const [dadosuser,setdadosuser] = useState()
  const [mostraruser,setmostraruser] = useState(false)

 async function buscarUsuario() {
    const resposta = await fetch(`http://localhost:3000/usuarios/${Id}`)

    const dados = await resposta.json()
    setdadosuser(dados)
    setmostraruser(true) 
  }

  function mostrarUsuarios(){
   if(Mostrar) {
    setMostrar(false)
   } else{
    setMostrar(true)
   }
  }

  return (
    <>
    <h1>Selecione uma opção</h1>
    <button onClick={mostrarUsuarios}>Todos os users</button>

    <h2>Digite o id do usuario</h2>
    <input type="text" onChange={e => setId(e.target.value)} />

    <button onClick={buscarUsuario}>Buscar usuario</button>

    {Mostrar ? <TodosUser/> : '' }
    {mostraruser ? dadosuser.nome : ''}
     
    </>
  )
}

export default App
