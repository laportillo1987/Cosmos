import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/dashboard.css';  // Asegúrate de crear y usar un archivo CSS para los estilos.

const Profile = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h1>Perfil</h1>
        
        {/* Foto de perfil */}
        <div className="profile-header">
          <div className="profile-image">
            <img src={`/recursos/logo.png`} alt="FotoDePerfil" />
          </div>
          <div className="profile-info">
            <h2>Nombre: Luis Alfonso Portillo Torres</h2>
            <p><strong>Logia:</strong> Perseveranca y lealtad No.12</p>
            <p><strong>Grado:</strong> Compañero Masón</p>
            <p><strong>Último Grado:</strong> 15 de Agosto, 2024</p>
            <p><strong>Pagado hasta el mes:</strong> Abril, 2025</p>
          </div>
        </div>

        {/* Datos personales */}
        <div className="personal-data">
          <h3>Datos Personales</h3>
          <div className="personal-info">
            <div>
              <p><strong>Correo Electrónico Personal:</strong> laportillo1987@gmail.com</p>
              <p><strong>Correo de la Logia:</strong> laportillo@granlogiacosmosac.org</p>
              <p><strong>Teléfono:</strong> +52 614 510 0650</p>
            </div>
            <div>
              <p><strong>Teléfono de Emergencia:</strong> +52 614 397 0871</p>
              <p><strong>Nombre del Contacto de Emergencia:</strong> Marisol Aguilar Mejia</p>
            </div>
          </div>
          <div className="profile-info">
          <p ><strong>Dirección:</strong> Calle Periodista Ignacio Rodriguez 96, Col. Revolución, Chihuahua, Chihuauha, Mexico</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
