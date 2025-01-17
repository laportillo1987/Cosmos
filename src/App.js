import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Inicio from './Inicio';
import Historia from './Historia';
import Contacto from './Contacto';
import Galeria from './Galeria';
import Login from './login';
import Mision from './Mision';
import Vision from './Vision';
import Valores from './Valores';
import Menu from './Menu';  // Menú visible cuando el usuario no está autenticado
import Sidebar from './components/Sidebar';  // Sidebar que se muestra cuando el usuario está autenticado
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';
import Payments from './pages/Payments';
import Credentials from './pages/Credentials';
import './style.css';  // Hoja de estilo predeterminada
import './styles/dashboard.css';  // Hoja de estilo para el dashboard

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Comprobar si hay un token en el localStorage al cargar la aplicación
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);  // Si hay token, el usuario está autenticado
      const timer = setTimeout(() => {
        localStorage.removeItem('token'); // Eliminar el token
        setIsAuthenticated(false); // Cambiar el estado a no autenticado
      }, 60000); // 1 hora en milisegundos (3600000ms)

      // Limpiar el temporizador cuando el componente se desmonte
      return () => clearTimeout(timer);
    
    } else {
      setIsAuthenticated(false);  // Si no hay token, el usuario no está autenticado
    }
  }, []);

  // Establecer el archivo de estilo correcto según el estado de la autenticación
  const [styleSheet, setStyleSheet] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      setStyleSheet('../styles/dashboard.css');  // Si está autenticado, usar el archivo de estilo del dashboard
    } else {
      setStyleSheet('./style.css');  // Si no está autenticado, usar el archivo de estilo general
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="App">
        {/* Incluir el archivo CSS dinámicamente */}
        <link rel="stylesheet" href={styleSheet} />

        {/* Si está autenticado, mostrar Sidebar, si no, mostrar Menu */}
        {isAuthenticated ? (
          <div className="dashboard-container">
            <Sidebar /> {/* Mostrar Sidebar solo cuando esté autenticado */}
            <div className="main-content">
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/payments" element={<Payments />} />
                <Route path="/credentials" element={<Credentials />} />
              </Routes>
            </div>
          </div>
        ) : (
          <Menu /> // Mostrar Menu cuando no esté autenticado
        )}

        <Routes>
          {/* Rutas públicas */}
          <Route path="/" element={<Inicio />} />
          <Route path="/Historia" element={<Historia />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Galeria/:folderId" element={<Galeria />} />
          <Route path="/Mision" element={<Mision />} />
          <Route path="/Vision" element={<Vision />} />
          <Route path="/Valores" element={<Valores />} />
          
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
