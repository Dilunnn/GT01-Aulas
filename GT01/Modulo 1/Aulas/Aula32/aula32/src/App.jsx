import { useState } from 'react';
import './App.css';
import Perfil from './Components/Perfil';

function App() {
  let usuarios = [{ user: 'Maria', senha: '123' }, { user: 'Rafael', senha: '233' }];
  let [user, setUser] = useState('');
  let [senha, setSenha] = useState('');
  let [logado, setLogado] = useState(false); 

  function validarUser() {
    let autenticado = false;

    usuarios.forEach((usuario) => {
      if (usuario.user === user && usuario.senha === senha) {
        autenticado = true;
        setUser('')
        setSenha('')
      }
    });

    setLogado(autenticado);
  }

  return (
    <>
      <div className="row">
        <div className="offset-5 col-2">
          <h1>Login</h1>
          <label htmlFor="nome">Nome</label> <br />
          <input type="text" id="nome" name="nome" onChange={(e) => setUser(e.target.value)} /> <br /> <br />

          <label htmlFor="senha">Senha</label> <br />
          <input type="text" id="senha" name="senha" onChange={(e) => setSenha(e.target.value)} /> <br /> <br />

          <button type="button" onClick={validarUser}>Entrar</button>
          <p>{logado ? "Usuário autenticado!" : "Usuário não autenticado"}</p>
        </div>
        {logado && (<Perfil/>)}
      </div>
    </>
  );
}

export default App;
