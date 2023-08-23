const Experiencia = require('../models/experiencia');

exports.getExperiencia = async (req, res) => {
  try {
    const experiencia = await Experiencia.find();
    res.json(experiencia);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createExperiencia = async (req, res) => {
  const experiencia = new Experiencia({
    empresa: req.body.empresa,
    periodo: req.body.periodo,
    descripcion: req.body.descripcion
  });

  try {
    const nuevaExperiencia = await experiencia.save();
    res.status(201).json(nuevaExperiencia);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
