// api/images.js
const fs = require('fs');
const path = require('path');
const mime = require('mime-types'); // Usado para detectar el tipo de archivo de la imagen

export default function handler(req, res) {
  const { folderId, imageName } = req.query;

  // Ubicación de la carpeta de imágenes
  const imagesDir = path.join(process.cwd(), 'images', folderId);

  // Ruta de la imagen
  const imagePath = path.join(imagesDir, imageName);

  // Verificar si la imagen existe
  fs.exists(imagePath, (exists) => {
    if (!exists) {
      return res.status(404).json({ error: 'Imagen no encontrada' });
    }

    // Obtener el tipo MIME de la imagen
    const mimeType = mime.lookup(imagePath);
    res.setHeader('Content-Type', mimeType);

    // Enviar la imagen como respuesta
    fs.createReadStream(imagePath).pipe(res);
  });
}
