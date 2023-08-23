const mongoose = require('mongoose');

const datosPersonalesSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  nacionalidad: String,
  fecha_nacimiento: String,
  email: String,
  telefono: Number
});

module.exports = mongoose.model('DatosPersonales', datosPersonalesSchema);
