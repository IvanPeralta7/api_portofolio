const DatosPersonales = require('../models/datosPersonales');


exports.getDatosPersonales = async (req, res) => {
  try {
    const datosPersonales = await DatosPersonales.find();
    res.json(datosPersonales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDatosPersonales = async (req, res) => {
  const datosPersonales = new DatosPersonales({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    nacionalidad: req.body.nacionalidad,
    fecha_nacimiento: req.body.fecha_nacimiento,
    email: req.body.email,
    telefono: req.body.telefono
  });

  try {
    const nuevosDatosPersonales = await datosPersonales.save();
    res.status(201).json(nuevosDatosPersonales);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
