import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './contexts/UserContext'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <UserProvider>

      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
        <Footer/>
      </BrowserRouter>
      
    </UserProvider>
      
    </>
  )
}

export default App
