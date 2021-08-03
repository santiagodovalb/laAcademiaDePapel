const router = require('express').Router();
const entradasController = require('../controllers/entradas.js')

router.get('/', entradasController.findAll)

module.exports = router;