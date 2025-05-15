import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './Components/Componente1'

function App() {
  

  return (
    <>
      {/* CSS Global */}
      <h1>Título 1</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus adipisci amet eaque, itaque voluptatem, deleniti dolor aliquam quia officia, ipsa nobis modi doloribus mollitia. Harum unde odit repudiandae voluptas sapiente?</p>
      <p className='paragrafo2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque amet tenetur sed earum praesentium sit? Voluptatem obcaecati soluta velit minima recusandae totam atque distinctio quisquam? Tenetur laudantium exercitationem ratione consectetur.</p>

    {/* CSS de Componente */}
    <Componente1/>

    </>
  )
}

export default App
