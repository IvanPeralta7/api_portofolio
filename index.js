const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config;

const experienciaRoutes = require('./routes/experienciaRoutes');
const estudiosRoutes = require('./routes/estudiosRoutes');
const datosPersonalesRoutes = require('./routes/datosPersonalesRoutes');

const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/portofolio';

// Configuración de Mongoose
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB'));
db.once('open', () => {
  console.log('Conectado a MongoDB');
});

// Middleware para manejar JSON
app.use(bodyParser.json());

// Rutas
app.use('/experiencia', experienciaRoutes);
app.use('/estudios', estudiosRoutes);
app.use('/datosPersonales', datosPersonalesRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
