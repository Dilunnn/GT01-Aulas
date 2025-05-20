import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRouter';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Perfil from './pages/Perfil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <AppRoutes/>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
