import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Para navegar entre páginas
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon
import { faBars } from '@fortawesome/free-solid-svg-icons'; // Importa el icono

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar la visibilidad del sidebar

  // Función para alternar la visibilidad del sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Icono de menú */}
      <FontAwesomeIcon 
        icon={faBars} 
        className="menu-icon"
        onClick={toggleSidebar} // Al hacer clic, alternamos la visibilidad
      />
      
      {/* Sidebar con clase condicional */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h2>Menu</h2>
        <ul>
          <li>
            <Link to="/profile"  className={`link ${isOpen ? 'open' : ''}`}>Perfil</Link>
          </li>
          <li>
            <Link to="/jobs"  className={`link ${isOpen ? 'open' : ''}`}>Trabajos</Link>
          </li>
          <li>
            <Link to="/payments"  className={`link ${isOpen ? 'open' : ''}`}>Pagos</Link>
          </li>
          <li>
            <Link to="/credentials"  className={`link ${isOpen ? 'open' : ''}`}>Credencial</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
