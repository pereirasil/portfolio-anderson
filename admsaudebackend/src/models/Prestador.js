const mongoose = require('mongoose');

const prestadorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    trim: true
  },
  empresaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Prestador', prestadorSchema); 