const express = require('express');
const estudiosController = require('../controllers/estudiosController');

const router = express.Router();

router.get('/', estudiosController.getEstudios);
router.post('/', estudiosController.createEstudios);

module.exports = router;
