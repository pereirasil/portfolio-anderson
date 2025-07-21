import api from './api';

const InformativoService = {
  getAll: () => api.get('/informativos'),
  getById: (id) => api.get(`/informativos/${id}`),
  create: (data) => api.post('/informativos', data),
  update: (id, data) => api.put(`/informativos/${id}`, data),
  delete: (id) => api.delete(`/informativos/${id}`),
};

export default InformativoService; 