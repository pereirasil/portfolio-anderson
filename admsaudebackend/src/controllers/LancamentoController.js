const BaseController = require('../core/BaseController');
const LancamentoService = require('../services/LancamentoService');

class LancamentoController extends BaseController {
  constructor() {
    super(new LancamentoService());
  }

  async getResumoMensal(req, res) {
    try {
      const { mesAno } = req.query;
      if (!mesAno) {
        return res.status(400).json({ message: 'Mês/Ano é obrigatório' });
      }

      const resumo = await this.service.getResumoMensal(mesAno);
      res.json(resumo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getResumoPorConvenio(req, res) {
    try {
      const { mesAno } = req.query;
      if (!mesAno) {
        return res.status(400).json({ message: 'Mês/Ano é obrigatório' });
      }

      const resumo = await this.service.getResumoPorConvenio(mesAno);
      res.json(resumo);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new LancamentoController(); 