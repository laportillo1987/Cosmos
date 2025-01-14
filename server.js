const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); // Importa el paquete cors
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'https://cosmos-indol-theta.vercel.app/' // Permite solicitudes desde el frontend en el puerto 3000
}));

// Ruta de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Verifica si el usuario existe en la base de datos
  db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error en la base de datos' });
    }

    if (result.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const user = result[0];

    // Compara la contraseña con la almacenada en la base de datos
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: 'Error al comparar las contraseñas' });
      }

      if (!isMatch) {
        return res.status(400).json({ message: 'Contraseña incorrecta' });
      }

      // Genera el token JWT
      const token = jwt.sign({ userId: user.id, profile: user.profile }, process.env.JWT_SECRET, {
        expiresIn: '1h', // El token expirará en 1 hora
      });

      return res.status(200).json({ message: 'Autenticación exitosa', token });
    });
  });
});

// Ruta donde están las imágenes
const imagesDir = path.join(__dirname, 'images'); // Asume que las imágenes están en una carpeta 'images' en la raíz del proyecto

// Endpoint para obtener las imágenes de una carpeta específica
app.get('/api/images/:folderId', (req, res) => {
  const folderId = req.params.folderId;  // Obtén el folderId desde la URL
  const folderPath = path.join(imagesDir, folderId);  // Concatenamos el folderId para obtener la carpeta específica

  // Verifica si la carpeta existe
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Error al leer la carpeta de imágenes' });
    }

    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|bmp)$/i.test(file));

    const sortedImages = imageFiles.map(file => {
      const filePath = path.join(folderPath, file);
      const stats = fs.statSync(filePath);
      return {
        name: file,
        date: stats.mtime,
        url: `/images/${folderId}/${file}` // Cambiado para incluir el folderId en la URL
      };
    }).sort((a, b) => b.date - a.date);

    res.json(sortedImages);  // Devolver las imágenes ordenadas
  });
});

// Servir las imágenes estáticas desde la carpeta 'images'
app.use('/images', express.static(imagesDir));

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
