const express = require('express');
const experienciaController = require('../controllers/experienciaController');

const router = express.Router();

router.get('/', experienciaController.getExperiencia);
router.post('/', experienciaController.createExperiencia);

module.exports = router;
