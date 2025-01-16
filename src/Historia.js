import React from 'react';
import './style.css';  // Importar los estilos

// Componente Inicio
const Historia = () => {
  const posts = [
    {
      id: 1,
      title: 'Cosmos desde',
      image: 'https://via.placeholder.com/800x400',  // URL de la imagen
      text: 'Hoy comencé una nueva aventura, y estoy muy emocionado de compartir mis experiencias con todos ustedes. ¡Aquí empieza mi viaje!',
    },
    {
      id: 2,
      title: 'Perseverancia y lealtead No. 12 desde',
      image: 'https://via.placeholder.com/800x400',
      text: 'Explorar nuevos horizontes es algo que siempre he deseado hacer, y ahora estoy aquí, rodeado de belleza natural y oportunidades de aprendizaje.',
    },
    {
      id: 3,
      title: 'Antonio canales Olivares Desde',
      image: 'https://via.placeholder.com/800x400',
      text: 'Después de un día lleno de descubrimientos, me tomé un tiempo para reflexionar sobre lo que realmente significa disfrutar el momento presente.',
    },
  ];

  return (
    <div className="container">
    <div className="blog-container">
      <img src={`/recursos/logo.png`} id='logo' alt="Logo" />
      <h1 className="blog-title">Historia de las Logias de Cosmos A.C.</h1>
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
    </div>

  );
};

export default Historia;
