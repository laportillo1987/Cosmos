import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importamos Link de React Router
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faBook, faEnvelope, faUser, faImages } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Menu = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  // Función para alternar la visibilidad del submenú
  const toggleGalleryMenu = (menuName) =>  {
    if (menuName === 'Galería') {
      setIsGalleryOpen(!isGalleryOpen);
    }
    else
    {
      setIsGalleryOpen(false);
    }
  };

  // Función para manejar el clic en los elementos del submenú
  const handleSubmenuClick = (folderId) => {
    setIsGalleryOpen(false); // Cerrar el submenú al hacer clic
  };

  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item">
          <Link to="/" onMouseMove={() => toggleGalleryMenu('')}>
            <FontAwesomeIcon icon={faHouse} />
            <span>Inicio</span>
          </Link>
        </li>
        <li className="menu-item">
            <Link to="/Historia" onMouseMove={() => toggleGalleryMenu('')}>
                <FontAwesomeIcon icon={faBook} />
                <span>Historia</span>
            </Link>
        </li>
        <li className="menu-item">
          <Link to="/Mision" onMouseMove={() => toggleGalleryMenu('')}>
            <span>Misión</span>
          </Link>
        </li>
        <li className="menu-item">
        <Link to="/Vision" onMouseMove={() => toggleGalleryMenu('')}>
            <span>Visión</span>
          </Link>
        </li>
        <li className="menu-item">
        <Link to="/Valores" onMouseMove={() => toggleGalleryMenu('')}>
            <span>Valores</span>
          </Link>
        </li>
        <li className="menu-item">
            <Link to="/Contacto" onMouseMove={() => toggleGalleryMenu('')}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Contacto</span>
            </Link>
        </li>
        {/* Menú de Galería con submenú */}
        <li className="menu-item">
          <Link className="gallery-toggle" onClick={() => toggleGalleryMenu('Galería')} onMouseMove ={() => toggleGalleryMenu('Galería')}>
            <FontAwesomeIcon icon={faImages} />
            <span>Galería</span>
          </Link>
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
          <Link to="/Login" onMouseMove={() => toggleGalleryMenu('')}>
            <FontAwesomeIcon icon={faUser} />
            <span>Login</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
