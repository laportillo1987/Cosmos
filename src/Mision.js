import React from 'react';
import './Mision.css'; // Asegúrate de crear este archivo CSS para los estilos


const Mision = () => {
  return (
    <div className="mision-container">
      <div className="mision-header">
        <img src={`/recursos/logo.png`} id='logo' alt="Logo" />
        <h1>Misión</h1>
      </div>
      <div className="mision-content">
        <p>
          La misión de la masoneria es promover el perfeccionamiento moral, ético y espiritual de sus miembros, 
          fomentando el estudio de las ciencias, la filosofía y el arte en un ambiente de fraternidad y cooperación. 
          Su propósito fundamental es contribuir al bienestar de la humanidad, guiando a sus integrantes hacia la luz del conocimiento y la verdad, 
          y promoviendo valores de justicia, libertad y solidaridad.
        </p>
      </div>
    </div>
  );
};

export default Mision;
