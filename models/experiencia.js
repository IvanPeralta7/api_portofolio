const mongoose = require('mongoose');

const experienciaSchema = new mongoose.Schema({
  empresa: String,
  periodo: String,
  descripcion: String
});

module.exports = mongoose.model('Experiencia', experienciaSchema);
