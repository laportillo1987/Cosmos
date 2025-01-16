import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';  // Importamos el archivo CSS global para los estilos

const Galeria = () => {
  const { folderId } = useParams();  // Obtenemos el parámetro folderId desde la URL
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);

  // Función para obtener las imágenes desde el servidor según la carpeta seleccionada
  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch(`http://localhost:5000/api/images/${folderId}`);
      const data = await response.json();
      setImages(data);
    };

    if (folderId) {
      fetchImages();
    } else {
      setImages([]);
    }
  }, [folderId]);

  // Función para abrir el carrusel con la imagen seleccionada
  const openCarousel = (image) => {
    setSelectedImage(image);
    setIsCarouselOpen(true);
  };

  // Función para cerrar el carrusel
  const closeCarousel = () => {
    setIsCarouselOpen(false);
    setSelectedImage(null);
  };

  // Funciones para navegar entre las imágenes del carrusel
  const nextImage = () => {
    const currentIndex = images.findIndex((img) => img.name === selectedImage.name);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex((img) => img.name === selectedImage.name);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="container">
      {/* Título con el folderId */}
      <img src={`/recursos/logo.png`} id="logo" alt="Logo" />
      <h1 className="history-title">{folderId ? `Galería de ${folderId}` : 'Galería'}</h1>

      <div className="gallery-grid">
        {images.length === 0 ? (
          <p>No hay imágenes disponibles para esta galería.</p>
        ) : (
          images.map((image, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openCarousel(image)}
            >
              <img
                src={`http://localhost:5000${image.url}`}
                alt={`Imagen ${index + 1}`}
                className="post-image"
              />
            </div>
          ))
        )}
      </div>

      {/* Mostrar el carrusel si está abierto */}
      {isCarouselOpen && (
        <div className="carousel-overlay" onClick={closeCarousel}>
          <div className="carousel-container" onClick={(e) => e.stopPropagation()}>
            <button className="carousel-btn prev" onClick={prevImage}>
              &lt;
            </button>
            <img
              src={`http://localhost:5000${selectedImage.url}`}
              alt="Imagen seleccionada"
              className="carousel-image"
            />
            <button className="carousel-btn next" onClick={nextImage}>
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Galeria;
