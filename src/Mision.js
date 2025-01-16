import React from 'react';
import './style.css';

const Mision = () => {
  return (
    <div className="container">
      <div className="blog-container">
        <div className="blog-title">
          <img src={`/recursos/logo.png`} id='logo' alt="Logo" />
          <h1>Misión</h1>
        </div>
        <div className="post">
          <p>
            La misión de la masonería es promover el perfeccionamiento moral, ético y espiritual de sus miembros, 
            fomentando el estudio de las ciencias, la filosofía y el arte en un ambiente de fraternidad y cooperación. 
            Su propósito fundamental es contribuir al bienestar de la humanidad, guiando a sus integrantes hacia la luz del conocimiento y la verdad, 
            y promoviendo valores de justicia, libertad y solidaridad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Mision;

