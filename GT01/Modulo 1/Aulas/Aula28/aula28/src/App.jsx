import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import Saudacao from './components/Saudacao'


function App() {
  let pessoas = [{name:'Rodrigo', idade: 20},{name:'rafael',idade: 29},{name:'Ana',idade: 30},{name:'diogo',idade: 18}]

  
  
  
  return (
    
    <>
      <Cabecalho/>
      <h1>Olá mundo no React</h1>
      
      <Saudacao pessoas = {pessoas} />
      
      <Rodape/>
    </>
  )
}

export default App
