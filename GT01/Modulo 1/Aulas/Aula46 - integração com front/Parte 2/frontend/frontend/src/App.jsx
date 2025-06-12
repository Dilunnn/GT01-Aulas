import { useEffect, useState } from 'react'
import './App.css'
import TodosUser from './components/TodosUser'
import UserEspecifico from './Components/UserEspecifico'
import CadastroUsuario from './Components/CadastroUsuario'
import TodosProf from './Components/TodosProf'

function App() {
  let [mostrar,setMostrar] = useState(false)
  let [id,setId] = useState('')
  let [dadosUser, setDadosUser] = useState({nome:""})

  let [componente,setComponente] = useState()



  return (
    <>
      <h1>Selecione uma opção</h1>

      <button onClick={() => {setComponente('todos')}}>Todos os Usuarios</button>
      <button onClick={() => {setComponente('um')}}>Exibir usuario</button>
      <button onClick={() => {setComponente('umProf')}}>Exibir Professores</button>
      <button onClick={() => {setComponente('cadastrar')}}>Cadastrar usuario</button>
      <button onClick={() => {setComponente('atualizar')}}>atualizar dados</button>
      <button onClick={() => {setComponente('deletar')}}>Deletar usuario</button>
      <button onClick={() => {setComponente('')}}>Limpar tela</button>


      <div>
        {componente == 'todos' && <TodosUser/>}
        {componente == 'um' && <UserEspecifico/>}
        {componente == 'cadastrar' && <CadastroUsuario/>}
        {componente == 'umProf' && <TodosProf/>}
      </div>

        {/* Crie um componente para cadastrar um aluno */}
        {/* Crie um componente para cadastrar um professor */}


    </>
  )
}

export default App