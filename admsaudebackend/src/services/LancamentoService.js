const BaseService = require('../core/BaseService');
const Lancamento = require('../models/Lancamento');

class LancamentoService extends BaseService {
  constructor() {
    super(Lancamento);
  }

  async findAll(options = {}) {
    const { 
      empresaId, 
      prestadorId, 
      mesAno, 
      tipo,
      convenio,
      status,
      ...rest 
    } = options;

    const where = {};

    if (empresaId) where.empresa = empresaId;
    if (prestadorId) where.prestador = prestadorId;
    if (mesAno) {
      const [mes, ano] = mesAno.split('/');
      const startDate = new Date(ano, mes - 1, 1);
      const endDate = new Date(ano, mes, 0);
      where.mesAno = {
        $gte: startDate,
        $lte: endDate
      };
    }
    if (tipo) where.tipo = tipo;
    if (convenio) where.convenio = { $regex: convenio, $options: 'i' };
    if (status) where.status = status;

    return super.findAll({
      ...rest,
      where,
      sort: { mesAno: -1, createdAt: -1 }
    });
  }

  async findById(id) {
    return this.model.findById(id)
      .populate('empresa')
      .populate('prestador');
  }

  async create(data) {
    return this.model.create(data);
  }

  async update(id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true })
      .populate('empresa')
      .populate('prestador');
  }

  async getResumoMensal(mesAno) {
    const [mes, ano] = mesAno.split('/');
    const startDate = new Date(ano, mes - 1, 1);
    const endDate = new Date(ano, mes, 0);

    const lancamentos = await this.model.find({
      mesAno: {
        $gte: startDate,
        $lte: endDate
      }
    });

    const resumo = {
      previsto: 0,
      pago: 0,
      glosa: 0,
      saldo: 0
    };

    lancamentos.forEach(lanc => {
      resumo.previsto += lanc.valorCobrado;
      resumo.pago += lanc.valorPago;
      resumo.glosa += lanc.glosa;
    });

    resumo.saldo = resumo.previsto - resumo.pago;

    return resumo;
  }

  async getResumoPorConvenio(mesAno) {
    const [mes, ano] = mesAno.split('/');
    const startDate = new Date(ano, mes - 1, 1);
    const endDate = new Date(ano, mes, 0);

    const lancamentos = await this.model.find({
      mesAno: {
        $gte: startDate,
        $lte: endDate
      }
    });

    const resumoPorConvenio = {};

    lancamentos.forEach(lanc => {
      if (!resumoPorConvenio[lanc.convenio]) {
        resumoPorConvenio[lanc.convenio] = {
          previsto: 0,
          pago: 0,
          glosa: 0
        };
      }

      resumoPorConvenio[lanc.convenio].previsto += lanc.valorCobrado;
      resumoPorConvenio[lanc.convenio].pago += lanc.valorPago;
      resumoPorConvenio[lanc.convenio].glosa += lanc.glosa;
    });

    return resumoPorConvenio;
  }
}

module.exports = LancamentoService; 