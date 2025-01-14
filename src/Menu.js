import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importamos Link de React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook, faEnvelope, faUser, faImages } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

const Menu = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Función para alternar la visibilidad del submenú
  const toggleGalleryMenu = () => {
    setIsGalleryOpen(!isGalleryOpen);
  };

  // Función para manejar el clic en los elementos del submenú
  const handleSubmenuClick = (folderId) => {
    setIsGalleryOpen(false); // Cerrar el submenú al hacer clic
  };

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/">
            <FontAwesomeIcon icon={faHouse} />
            <span>Inicio</span>
          </Link>
        </li>
        <li className="menu-item">
            <Link to="/Historia">
                <FontAwesomeIcon icon={faBook} />
                <span>Historia</span>
            </Link>
        </li>
        <li className="menu-item">
          <Link to="/Mision">
            <span>Misión</span>
          </Link>
        </li>
        <li className="menu-item">
        <Link to="/Vision">
            <span>Visión</span>
          </Link>
        </li>
        <li className="menu-item">
        <Link to="/Valores">
            <span>Valores</span>
          </Link>
        </li>
        <li className="menu-item">
            <Link to="/Contacto">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Contacto</span>
            </Link>
        </li>
        {/* Menú de Galería con submenú */}
        <li className="menu-item">
          <button className="gallery-toggle" onClick={toggleGalleryMenu}>
            <FontAwesomeIcon icon={faImages} />
            <span>Galería</span>
          </button>
          {isGalleryOpen && (
            <ul className="submenu">
              <li>
                <Link to="/Galeria/GranLogiaCosmos" onClick={() => handleSubmenuClick('GranLogiaCosmos')}>
                  Gran Logia Cosmos
                </Link>
              </li>
              <li>
                <Link to="/Galeria/PerseveranciaYLealtad12" onClick={() => handleSubmenuClick('PerseveranciaYLealtad12')}>
                  Perseverancia y Lealtad No.12
                </Link>
              </li>
              <li>
                <Link to="/Galeria/AntonioCanalesOlivares64" onClick={() => handleSubmenuClick('AntonioCanalesOlivares64')}>
                  Antonio Canales Olivares No. 64
                </Link>
              </li>
              <li>
                <Link to="/Galeria/HonestidadYTrabajo10" onClick={() => handleSubmenuClick('HonestidadYTrabajo10')}>
                  Honestidad y Trabajo No.10
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li className="menu-item login">
          <Link to="/Login">
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
