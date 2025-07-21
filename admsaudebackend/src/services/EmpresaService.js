const BaseService = require('../core/BaseService');
const Empresa = require('../models/Empresa');

class EmpresaService extends BaseService {
  constructor() {
    super(Empresa);
  }

  async findAll(options = {}) {
    const { nome, cnpj, ...rest } = options;
    const where = {};

    if (nome) where.nome = { $regex: nome, $options: 'i' };
    if (cnpj) where.cnpj = cnpj;

    return super.findAll({
      ...rest,
      where,
      sort: { nome: 1 }
    });
  }

  async findById(id) {
    return this.model.findById(id)
      .populate('prestadores')
      .populate('lancamentos');
  }

  async create(data) {
    return this.model.create(data);
  }

  async update(id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true })
      .populate('prestadores')
      .populate('lancamentos');
  }

  async delete(id) {
    return super.delete(id);
  }
}

module.exports = EmpresaService; 