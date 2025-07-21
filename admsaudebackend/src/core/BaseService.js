const mongoose = require('mongoose');

class BaseService {
  constructor(model) {
    this.model = model;
  }

  async findAll(options = {}) {
    const { where = {}, ...rest } = options;
    return this.model.find(where, null, rest);
  }

  async findById(id) {
    return this.model.findById(id);
  }

  async create(data) {
    const model = new this.model(data);
    return model.save();
  }

  async update(id, data) {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return this.model.findByIdAndDelete(id);
  }

  async count(where = {}) {
    return this.model.countDocuments(where);
  }
}

module.exports = BaseService; 