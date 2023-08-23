const express = require('express');
const datosPersonalesController = require('../controllers/datosPersonalesController');

const router = express.Router();

router.get('/', datosPersonalesController.getDatosPersonales);
router.post('/', datosPersonalesController.createDatosPersonales);

module.exports = router;
