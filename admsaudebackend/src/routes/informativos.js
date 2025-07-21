const express = require('express');
const router = express.Router();
const Informativo = require('../models/Informativo');
const auth = require('../middleware/auth');

// Get all informativos
router.get('/', auth, async (req, res) => {
  try {
    const informativos = await Informativo.find()
      .sort({ data: -1 });
    res.json(informativos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Create informativo
router.post('/', auth, async (req, res) => {
  try {
    const { titulo, mensagem } = req.body;
    
    const informativo = new Informativo({
      titulo,
      mensagem
    });
    
    const savedInformativo = await informativo.save();
    res.status(201).json(savedInformativo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Update informativo
router.put('/:id', auth, async (req, res) => {
  try {
    const { titulo, mensagem, ativo } = req.body;
    const informativo = await Informativo.findByIdAndUpdate(
      req.params.id,
      { titulo, mensagem, ativo },
      { new: true, runValidators: true }
    );
    
    if (!informativo) {
      return res.status(404).json({ message: 'Informativo not found' });
    }
    
    res.json(informativo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete informativo
router.delete('/:id', auth, async (req, res) => {
  try {
    const informativo = await Informativo.findByIdAndDelete(req.params.id);
    
    if (!informativo) {
      return res.status(404).json({ message: 'Informativo not found' });
    }
    
    res.json({ message: 'Informativo deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 