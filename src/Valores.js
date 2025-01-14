import React from 'react';
import './Mision.css';

const Valores = () => {
  return (
    <div className="mision-container">
      <div className="mision-header">
        <img src={`/recursos/logo.png`} id='logo' alt="Logo" />
        <h1>Valores</h1>
      </div>
      <div className="mision-content">
        <ol>
          <li><strong>Fraternidad:</strong> La hermandad y el apoyo mutuo entre los masones, independientemente de su origen, raza o creencias.</li>
          <li><strong>Libertad:</strong> El derecho a pensar y actuar conforme a la propia conciencia, siempre respetando a los demás.</li>
          <li><strong>Igualdad:</strong> El principio de que todos los seres humanos son iguales en dignidad y derechos, sin distinción de raza, estatus o posición social.</li>
          <li><strong>Solidaridad:</strong> La ayuda mutua y el trabajo en conjunto para lograr un bien común, tanto dentro de la logia como en la sociedad.</li>
          <li><strong>Tolerancia:</strong> El respeto por las creencias, opiniones y prácticas de los demás, promoviendo la paz y la unidad entre las personas.</li>
          <li><strong>Veracidad:</strong> La búsqueda de la verdad a través del estudio, la reflexión y el autoconocimiento.</li>
          <li><strong>Caridad:</strong> El compromiso con la ayuda desinteresada a los necesitados y el esfuerzo por mejorar la vida de quienes nos rodean.</li>
          <li><strong>Perfeccionamiento personal:</strong> El constante trabajo en uno mismo, para convertirse en una mejor versión de cada miembro, buscando siempre la mejora en todos los aspectos de la vida.</li>
        </ol>
      </div>
    </div>
  );
};

export default Valores;
