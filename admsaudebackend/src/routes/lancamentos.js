const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const LancamentoController = require('../controllers/LancamentoController');

// Get all lancamentos
router.get('/', auth, LancamentoController.getAll);

// Get lancamento by ID
router.get('/:id', auth, LancamentoController.getById);

// Create lancamento
router.post('/', auth, LancamentoController.create);

// Update lancamento
router.put('/:id', auth, LancamentoController.update);

// Delete lancamento
router.delete('/:id', auth, LancamentoController.delete);

// Get resumo mensal
router.get('/resumo/mensal', auth, LancamentoController.getResumoMensal);

// Get resumo por convênio
router.get('/resumo/convenio', auth, LancamentoController.getResumoPorConvenio);

module.exports = router; 