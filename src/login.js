import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Maneja el submit del formulario
  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/login', {
        username,
        password,
      });

      if (response.data.token) {
        // Guardar token en el localStorage o estado global (por ejemplo con Redux)
        localStorage.setItem('token', response.data.token);
        alert('¡Login exitoso!');
        window.location.href = '/dashboard'; // Redirige a la página principal o dashboard
      }
    } catch (error) {
      setError('Usuario o contraseña incorrectos');
      setLoading(false);
    }
  };

  return (
    <div classname="container">
    <div className="login-container">
      <div className="login-box">
        <img src={`/recursos/logo.png`} id='logo' alt="Logo"/>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              placeholder="Ingresa tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? 'Cargando...' : 'Iniciar sesión'}
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
