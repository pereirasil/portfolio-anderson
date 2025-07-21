const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const PrestadorController = require('../controllers/PrestadorController');

// Get all prestadores
router.get('/', auth, PrestadorController.getAllPrestadores);

// Create prestador
router.post('/', auth, PrestadorController.createPrestador);

// Update prestador
router.put('/:id', auth, PrestadorController.updatePrestador);

// Delete prestador
router.delete('/:id', auth, PrestadorController.deletePrestador);

module.exports = router; 