import React from 'react';

import './style.css';  // Importamos el archivo CSS para los estilos


const Contacto = () => {
  const handleCopyPhone = (phoneNumber) => {
    navigator.clipboard.writeText(phoneNumber).then(() => {
      alert('Teléfono copiado: ' + phoneNumber);
    });
  };

  return (

    <div className="container">
      <div className="blog-container">
        <img src={`/recursos/logo.png`} id='logo' alt="Logo" />
          <h1 className="blog-title">Contacto</h1>
          {/* Contacto 1 */}
          <div className="post">
            <h2>Perseverancia y Lealtad No. 12</h2>
            <div className="post-details">
              <p><strong>Teléfono: </strong><a href="tel:0000000000" className="contact-link" onClick={() => handleCopyPhone('000-000-00-00')}>000-000-00-00</a></p>
              <p><strong>Email: </strong><a href="mailto:ejemplo@ejemplo.com" className="contact-link">ejemplo@ejemplo.com</a></p>
              <p><strong>Redes Sociales:</strong></p>
              <div className="social-links">
                <a href="https://wa.me/0000000000" className="social-link">WhatsApp</a>
                <a href="https://www.facebook.com" className="social-link">Facebook</a>
                <a href="https://www.instagram.com" className="social-link">Instagram</a>
              </div>
            </div>
          </div>

          {/* Contacto 2 */}
          <div className="post">
            <h2>Antonio Canales Olivares No. 64</h2>
            <div className="post-details">
              <p><strong>Teléfono: </strong><a href="tel:0000000000" className="contact-link" onClick={() => handleCopyPhone('000-000-00-00')}>000-000-00-00</a></p>
              <p><strong>Email: </strong><a href="mailto:ejemplo@ejemplo.com" className="contact-link">ejemplo@ejemplo.com</a></p>
              <p><strong>Redes Sociales:</strong></p>
              <div className="social-links">
                <a href="https://wa.me/0000000000" className="social-link">WhatsApp</a>
                <a href="https://www.facebook.com" className="social-link">Facebook</a>
                <a href="https://www.instagram.com" className="social-link">Instagram</a>
              </div>
            </div>
          </div>

          {/* Contacto 3 */}
          <div className="post">
            <h2>Honor y Trabajo No. 10</h2>
            <div className="post-details">
              <p><strong>Teléfono: </strong><a href="tel:0000000000" className="contact-link" onClick={() => handleCopyPhone('000-000-00-00')}>000-000-00-00</a></p>
              <p><strong>Email: </strong><a href="mailto:ejemplo@ejemplo.com" className="contact-link">ejemplo@ejemplo.com</a></p>
              <p><strong>Redes Sociales:</strong></p>
              <div className="social-links">
                <a href="https://wa.me/0000000000" className="social-link">WhatsApp</a>
                <a href="https://www.facebook.com" className="social-link">Facebook</a>
                <a href="https://www.instagram.com" className="social-link">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Contacto;
