const express = require('express');
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/postController');
const auth = require('../middleware/auth'); // Importar el middleware de autenticación
const router = express.Router();

router.post('/', auth, createPost); // Crear una publicación protegida con autenticación
router.get('/', getPosts);
router.put('/:id', auth, updatePost); // Actualizar una publicación protegida
router.delete('/:id', auth, deletePost); // Eliminar una publicación protegida

module.exports = router;
  