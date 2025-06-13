import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [user,setuser] = useState('')

  let [senha,setsenha] = useState('')

  let usuarios = [
    {user:'Maria', senha:'123'},
    {user:'Pedro', senha:'123'},
    {user:'João', senha:'123'},
    {user:'rafael', senha:'123'},
  ]


  function enviar(e){
    e.preventDefault()
    let logado = false
    usuarios.forEach((usuario) => {
      if (usuario.user == user) {
        if (usuario.senha == senha) {
          logado = true
        } else {
          console.log('Senha errada');
          
        }
      } else {
        console.log('Usuário errado');
        
      }
    })

  }

  return (
    <>
      <h1>Tela de login</h1>
      <form>
        <div>
          <label htmlFor="user">Usuário:</label>
          <input onChange={(e) => setuser(e.target.value)} type="text" name='user' id='user' />
        </div>

        <div>
          <label htmlFor="senha">Senha:</label>
          <input onChange={(e) => setsenha(e.target.value)} type="password" name='senha' id='senha' />
        </div>

        <button onClick={(e) => enviar(e)} type="submit">Logar</button>

      </form>
      
        <h2>Usuário: {user} <br /> Senha: {senha}</h2>
    </>
  )
}

export default App
