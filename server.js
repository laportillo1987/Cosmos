const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors'); // Importa el paquete cors
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('./db');
const dotenv = require('dotenv');
const axios = require('axios');  // Importar axios
const OpenAI = require('openai');  // Importar la biblioteca openai

dotenv.config();

const app = express();
const port = 5000;

// Configuración de OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Usa la clave API desde las variables de entorno
});

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000' // Permite solicitudes desde el frontend en el puerto 3000
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
const postsDir = path.join(__dirname, 'posts'); // Ruta donde están los posts (corrige la ruta de los posts)

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

// Ruta para obtener una frase de OpenAI
app.post('/get-ai-quote', async (req, res) => {
  try {
    // Solicita una frase a OpenAI usando el modelo gpt-4
    const response = await openai.chat.completions.create({
      model: 'gpt-3',  // Modelo correcto de OpenAI
      messages: [
        { role: 'user', content: 'Dame una frase famosa de un gran mason' }
      ],
    });

    // Responde con el contenido generado
    res.json({
      quote: response.choices[0].message.content.trim(),
    });
  } catch (error) {
    console.error('Error al obtener la frase de OpenAI:', error);
    res.status(500).json({ error: 'Algo salió mal al obtener la frase de OpenAI' });
  }
});

// Ruta para obtener los posts
app.get('/api/posts', (req, res) => {
  fs.readdir(postsDir, (err, folders) => {
    if (err) {
      console.error('Error al leer la carpeta de posts:', err); // Agregar un log detallado
      return res.status(500).json({ message: 'Error al leer los posts' });
    }

    // Filtrar solo las carpetas (que representan los posts)
    const postData = folders.filter(folder => fs.statSync(path.join(postsDir, folder)).isDirectory()).map(folder => {
      const imagePath = `posts/${folder}/image.png`; // Asumiendo que las imágenes están nombradas como 'image.png'
      const textPath = path.join(postsDir, folder, 'text.txt');

      try {
        // Leer el contenido del archivo de texto
        const text = fs.readFileSync(textPath, 'utf-8');

        return {
          title: folder, // Nombre de la carpeta como título del post
          image: imagePath,
          text: text,
        };
      } catch (error) {
        console.error('Error al leer el archivo de texto:', error);  // Capturar el error al leer el texto
        return null;  // Si hubo un error, devuelve null para esta carpeta
      }
    }).filter(post => post !== null);  // Filtrar posts que sean null por error

    res.json(postData);
  });
});
app.use('/posts', express.static(path.join(__dirname, 'posts')));
app.use('/images', express.static(path.join(__dirname, 'images')));


// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
