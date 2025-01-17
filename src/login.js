import React, { useState } from 'react';
import axios from 'axios';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [is2FA, setIs2FA] = useState(false); 
  const [twoFactorToken, setTwoFactorToken] = useState('');
  const [secret, setSecret] = useState('');
  const navigate = useNavigate();

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
        if (response.data.twoFactorRequired) {
          setIs2FA(true);
          setSecret(response.data.secret);
        } else {
          localStorage.setItem('token', response.data.token);  // Guarda el token en el localStorage
          setIsAuthenticated(true);  // Actualiza el estado de autenticación
          alert('¡Login exitoso!');
          navigate('/profile');  
        }
      }
    } catch (error) {
      setError('Usuario o contraseña incorrectos');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handle2FACheck = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/verify-2fa', {
        username,
        token: twoFactorToken,
        secret: secret,
      });

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);  // Guarda el token en el localStorage
        setIsAuthenticated(true);  // Actualiza el estado de autenticación
        alert('¡Autenticación 2FA exitosa!');
        navigate('/profile');  
      } else {
        setError('Código incorrecto. Intenta nuevamente.');
      }
    } catch (error) {
      setError('Hubo un error al verificar el código.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="login-container">
        <div className="login-box">
          <img src={`/recursos/logo.png`} id="logo" alt="Logo" />
          <h2>{is2FA ? 'Autenticación de dos factores' : 'Iniciar Sesión'}</h2>

          {!is2FA ? (
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
          ) : (
            <form onSubmit={handle2FACheck}>
              <div className="input-group">
                <label htmlFor="twoFactorToken">Código de Google Authenticator</label>
                <input
                  type="text"
                  id="twoFactorToken"
                  placeholder="Ingresa el código de Google Authenticator"
                  value={twoFactorToken}
                  onChange={(e) => setTwoFactorToken(e.target.value)}
                  required
                />
              </div>
              {error && <div className="error-message">{error}</div>}
              <button type="submit" className="login-btn" disabled={loading}>
                {loading ? 'Cargando...' : 'Verificar código'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
