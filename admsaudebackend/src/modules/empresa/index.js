const express = require('express');
const router = express.Router();
const empresaRoutes = require('../../routes/empresas');

// Configuração do módulo de Empresa
router.use('/empresas', empresaRoutes);

module.exports = router; 