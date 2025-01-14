import React from 'react';
import './Inicio.css';  // Importar los estilos


// Componente Inicio
const Inicio = () => {
  const posts = [
    {
      id: 1,
      title: 'El comienzo de mi aventura',
      image: 'https://via.placeholder.com/800x400',  // URL de la imagen
      text: 'Hoy comencé una nueva aventura, y estoy muy emocionado de compartir mis experiencias con todos ustedes. ¡Aquí empieza mi viaje!',
    },
    {
      id: 2,
      title: 'Explorando nuevos horizontes',
      image: 'https://via.placeholder.com/800x400',
      text: 'Explorar nuevos horizontes es algo que siempre he deseado hacer, y ahora estoy aquí, rodeado de belleza natural y oportunidades de aprendizaje.',
    },
    {
      id: 3,
      title: 'Reflexiones del día',
      image: 'https://via.placeholder.com/800x400',
      text: 'Después de un día lleno de descubrimientos, me tomé un tiempo para reflexionar sobre lo que realmente significa disfrutar el momento presente.',
    },
  ];

  return (
    <div className="blog-container">
      <img src={`/recursos/logo.png`} id='logo' alt="Logo" />
      <h1 className="blog-title">Muy respetable gran Logia Cosmos A.C.</h1>
      <h2 className="blog-title">del estado de Chihuahua</h2>
      <div className="posts">
        {posts.map(post => (
          <div key={post.id} className="post">
            <img src={post.image} alt={post.title} className="post-image" />
            <h2 className="post-title">{post.title}</h2>
            <p className="post-text">{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inicio;
