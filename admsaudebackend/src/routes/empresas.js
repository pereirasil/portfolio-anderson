const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const EmpresaController = require('../controllers/EmpresaController');

// Get all empresas
router.get('/', auth, EmpresaController.getAll);

// Get empresa by ID
router.get('/:id', auth, EmpresaController.getById);

// Create empresa
router.post('/', auth, EmpresaController.create);

// Update empresa
router.put('/:id', auth, EmpresaController.update);

// Delete empresa
router.delete('/:id', auth, EmpresaController.delete);

module.exports = router; 