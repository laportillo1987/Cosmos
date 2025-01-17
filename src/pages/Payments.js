import React from 'react';
import Sidebar from '../components/Sidebar';

const Payments = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h1>Pagos</h1>
        <p>Detalles sobre tus pagos y transacciones.</p>
      </div>
    </div>
  );
};

export default Payments;
