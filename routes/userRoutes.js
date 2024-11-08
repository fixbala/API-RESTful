const express = require('express');
const { register, login } = require('../controllers/userController'); // Importar las funciones register y login
const router = express.Router();

router.post('/register', register); // Registrar usuario
router.post('/login', login); // Login de usuario

module.exports = router;
  