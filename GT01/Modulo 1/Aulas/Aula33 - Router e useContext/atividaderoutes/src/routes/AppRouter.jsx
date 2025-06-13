import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Conteudo from '../pages/Conteudo'
import Perfil from '../pages/Perfil';

let logado = true

function AppRouter() {
  return (
    <Routes>
       <Route path="/" element={logado ? <Navigate to="/home"/> : <Navigate to="/perfil"/>} />

      <Route path="/" element={<Home/>} />
      <Route path="/sobre" element={<Sobre/>} />
      <Route path="/conteudo" element={<Conteudo/>} />
      <Route path="/perfil" element={<Perfil/>} />

    </Routes>
  );
}

export default AppRouter;
