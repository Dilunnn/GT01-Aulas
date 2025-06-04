import { useState, useEffect } from 'react'
import './App.css'

function App() {

  let [usuarios,setusuarios] = useState([])

  useEffect(
    () => {
      fetch('http://localhost:3000/usuarios')
      .then(res => res.json())
      .then((res) => {
        setusuarios(res)
        console.log(usuarios);
      })
    }, [])




  return (
    <>
     
    </>
  )
}

export default App
