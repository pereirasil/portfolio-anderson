const BaseController = require('../core/BaseController');
const EmpresaService = require('../services/EmpresaService');

class EmpresaController extends BaseController {
  constructor() {
    super(new EmpresaService());
  }

  async getAllEmpresas(req, res) {
    try {
      const empresas = await this.empresaService.findAll();
      res.json(empresas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createEmpresa(req, res) {
    try {
      const { nome } = req.body;
      const empresa = await this.empresaService.create({ nome });
      res.status(201).json(empresa);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updateEmpresa(req, res) {
    try {
      const { id } = req.params;
      const { nome } = req.body;
      const empresa = await this.empresaService.update(id, { nome });
      
      if (!empresa) {
        return res.status(404).json({ message: 'Empresa not found' });
      }
      
      res.json(empresa);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteEmpresa(req, res) {
    try {
      const { id } = req.params;
      const result = await this.empresaService.delete(id);
      
      if (!result) {
        return res.status(404).json({ message: 'Empresa not found' });
      }
      
      res.json({ message: 'Empresa deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new EmpresaController(); 