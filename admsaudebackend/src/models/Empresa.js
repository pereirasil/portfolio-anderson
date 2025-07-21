const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true
  },
  cnpj: {
    type: String,
    required: true,
    unique: true
  },
  endereco: String,
  telefone: String,
  email: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Empresa', empresaSchema); 