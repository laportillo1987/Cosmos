import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './Inicio';  
import Historia from './Historia';  
import Contacto from './Contacto';  
import Galeria from './Galeria'; 
import Login from './login'; 
import Mision from './Mision'; 
import Vision from './Vision'; 
import Valores from './Valores'; 
import Menu from './Menu';  // Importamos el menú
import './style.css';     // Asegúrate de que el archivo CSS esté bien importado

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* El menú estará presente en todas las rutas */}
        <Menu />
        
        {/* Las rutas se definen aquí */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Historia" element={<Historia />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Galeria/:folderId" element={<Galeria />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Mision" element={<Mision />} />
          <Route path="/Vision" element={<Vision />} />
          <Route path="/Valores" element={<Valores />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
