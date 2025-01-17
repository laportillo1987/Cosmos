import React from 'react';
import Sidebar from '../components/Sidebar';

const Credentials = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h1>Credenciales</h1>
        <p>Gestión de tus credenciales.</p>
      </div>
    </div>
  );
};

export default Credentials;
