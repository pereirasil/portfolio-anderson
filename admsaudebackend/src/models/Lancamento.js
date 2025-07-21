const mongoose = require('mongoose');

const lancamentoSchema = new mongoose.Schema({
  empresa: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empresa',
    required: true
  },
  prestador: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Prestador',
    required: true
  },
  mesAno: {
    type: Date,
    required: true
  },
  dataEntregaFatura: {
    type: Date,
    required: true
  },
  tipo: {
    type: String,
    enum: ['FATURA', 'RECURSO'],
    required: true
  },
  convenio: {
    type: String,
    required: true
  },
  lote: {
    type: String,
    required: true
  },
  valorCobrado: {
    type: Number,
    required: true
  },
  valorPago: {
    type: Number,
    default: 0
  },
  glosa: {
    type: Number,
    default: 0
  },
  dataPagamento: {
    type: Date
  },
  observacoes: String,
  status: {
    type: String,
    enum: ['Pendente', 'Pago', 'Glosado'],
    default: 'Pendente'
  }
}, {
  timestamps: true
});

// Middleware para calcular a glosa automaticamente
lancamentoSchema.pre('save', function(next) {
  if (this.valorPago > 0) {
    this.glosa = this.valorCobrado - this.valorPago;
  }
  next();
});

// Indexes for better query performance
lancamentoSchema.index({ empresa: 1, prestador: 1 });
lancamentoSchema.index({ mesAno: 1 });
lancamentoSchema.index({ tipo: 1 });

module.exports = mongoose.model('Lancamento', lancamentoSchema); 