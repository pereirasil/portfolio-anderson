const mongoose = require('mongoose');

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('MongoDB conectado com sucesso!');
    })
    .catch((err) => {
      console.error('Erro ao conectar ao MongoDB:', err);
      process.exit(1);
    });
  }
}

module.exports = new Database(); 