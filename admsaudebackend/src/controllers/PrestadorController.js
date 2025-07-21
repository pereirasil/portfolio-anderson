const PrestadorService = require('../services/PrestadorService');

class PrestadorController {
  constructor() {
    this.prestadorService = new PrestadorService();
  }

  async getAllPrestadores(req, res) {
    try {
      const prestadores = await this.prestadorService.findAll();
      res.json(prestadores);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createPrestador(req, res) {
    try {
      const { nome, empresaId } = req.body;
      const prestador = await this.prestadorService.create({ nome, empresaId });
      res.status(201).json(prestador);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async updatePrestador(req, res) {
    try {
      const { id } = req.params;
      const { nome, empresaId } = req.body;
      const prestador = await this.prestadorService.update(id, { nome, empresaId });
      
      if (!prestador) {
        return res.status(404).json({ message: 'Prestador not found' });
      }
      
      res.json(prestador);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deletePrestador(req, res) {
    try {
      const { id } = req.params;
      const result = await this.prestadorService.delete(id);
      
      if (!result) {
        return res.status(404).json({ message: 'Prestador not found' });
      }
      
      res.json({ message: 'Prestador deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new PrestadorController(); 