import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {BrowserRouter} from 'react-router-dom'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import AppRoutes from './routes/AppRoutes'

function App() {

  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <AppRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App
