import React, { useState, useEffect } from 'react';
import './style.css';  // Importar los estilos
import axios from 'axios';

// Componente Inicio
const Inicio = () => {
  const [posts, setPosts] = useState([]);

  // Obtener los posts desde el servidor
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/posts');
        setPosts(data);  // Actualiza el estado con los datos de los posts
      } catch (error) {
        console.error('Error al obtener los posts:', error);
      }
    };

    fetchPosts();
  }, []);  // Solo se ejecuta una vez cuando el componente se monta

  return (
    <div className="container">
      <div className="blog-container">
        <img src={`/recursos/logo.png`} id='logo' alt="Logo" />
        <h1 className="blog-title">Muy respetable gran Logia Cosmos A.C.</h1>
        <h2 className="blog-title">del estado de Chihuahua</h2>
        <div className="posts">
          {posts.length === 0 ? (
            <p>No hay posts disponibles.</p>
          ) : (
            posts.map((post, index) => (
              <div key={index} className="post">
                <img src={`http://localhost:5000/${post.image}`} alt={post.title} className="post-image" />
                <h2 className="post-title">{post.title}</h2>
                <p className="post-text">{post.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
