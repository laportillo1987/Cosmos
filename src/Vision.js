import React from 'react';
import './style.css';

const Vision = () => {
  return (
    <div className="container">
      <div className="blog-container">
        <div className="blog-title">
          <img src={`/recursos/logo.png`} id='logo' alt="Logo" />
          <h1>Visión</h1>
        </div>
        <div className="post">
          <p>
            La visión de la masonería es ser una organización global que, a través del trabajo masónico y la práctica de sus altos principios, inspire a la humanidad a vivir en armonía, respetando la dignidad de cada individuo y colaborando en la construcción de una sociedad más justa, fraternal y progresista. Se busca una humanidad iluminada por los ideales de la fraternidad universal y la tolerancia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;

