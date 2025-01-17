import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/dashboard.css';  

const Jobs = () => {
  // Generar datos de ejemplo para los trabajos
  const trabajos = [];

  // Agregar 33 "Aprendiz"
  for (let i = 1; i <= 33; i++) {
    trabajos.push({
      grado: 'Aprendiz',
      nombre: `Juan Pérez`,
      tema: `Tema ${i}`,
      fecha: new Date(new Date().setDate(new Date().getDate() + i * 7)).toLocaleDateString(), // Sumar 7 días por cada fila
    });
  }

  // Agregar 21 "Compañero"
  for (let i = 1; i <= 21; i++) {
    trabajos.push({
      grado: 'Compañero',
      nombre: `Nombre del tema`,
      tema: `Tema ${i}`,
      fecha: new Date(new Date().setDate(new Date().getDate() + (i + 33) * 7)).toLocaleDateString(), // Sumar 7 días por cada fila
    });
  }

  // Agregar 15 "Tema Libre"
  for (let i = 1; i <= 15; i++) {
    trabajos.push({
      grado: 'Tema Libre',
      nombre: `Nombre del tema`,
      tema: `Tema ${i}`,
      fecha: new Date(new Date().setDate(new Date().getDate() + (i + 54) * 7)).toLocaleDateString(), // Sumar 7 días por cada fila
    });
  }

  // Agrupar los trabajos por grado
  const grados = ['Aprendiz', 'Compañero', 'Tema Libre'];
  const trabajosPorGrado = grados.map(grado => {
    return trabajos.filter(trabajo => trabajo.grado === grado);
  });

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <h1>Trabajos</h1>
        
        {/* Renderizar las tablas por grado */}
        {trabajosPorGrado.map((trabajosGrado, index) => {
          const grado = grados[index];
          return (
            <div key={grado}>
              <h2>{grado}</h2>
              <table className="jobs-table">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Tema</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {trabajosGrado.map((trabajo, index) => (
                    <tr key={index}>
                      <td>{trabajo.nombre}</td>
                      <td>{trabajo.tema}</td>
                      <td>{trabajo.fecha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Jobs;
