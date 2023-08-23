const mongoose = require('mongoose');

const estudiosSchema = new mongoose.Schema({
  institucion: String,
  nivel_alcanzado: String
});

module.exports = mongoose.model('Estudios', estudiosSchema);
