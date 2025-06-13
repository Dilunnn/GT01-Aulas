import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BuscaCEP from './Components/BuscaCEP'

function App() {
  

  return (
    <>
      <h1>Buscar de endereço pelo CEP</h1>
      <BuscaCEP/>
    </>
  )
}

export default App
