const prisma = require('../lib/prisma');

class PrestadorService {
  async findAll() {
    return prisma.prestador.findMany({
      include: {
        empresa: {
          select: {
            nome: true
          }
        }
      },
      orderBy: { nome: 'asc' }
    });
  }

  async create(prestadorData) {
    return prisma.prestador.create({
      data: prestadorData,
      include: {
        empresa: {
          select: {
            nome: true
          }
        }
      }
    });
  }

  async update(id, prestadorData) {
    return prisma.prestador.update({
      where: { id },
      data: prestadorData,
      include: {
        empresa: {
          select: {
            nome: true
          }
        }
      }
    });
  }

  async delete(id) {
    return prisma.prestador.delete({
      where: { id }
    });
  }
}

module.exports = PrestadorService; 