const Estudios = require('../models/estudios');

exports.getEstudios = async (req, res) => {
  try {
    const estudios = await Estudios.find();
    res.json(estudios);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createEstudios = async (req, res) => {
  const nuevosEstudios = new Estudios({
    institucion: req.body.institucion,
    nivel_alcanzado: req.body.nivel_alcanzado
  });

  try {
    const datos = await estudios.save();
    res.status(201).json(nuevosEstudios);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
