var express = require('express');
var router = express.Router();
var proyectosControlller = require('../controllers/proyectosController')

/* GET Listado Proyectos */
router.get('/', proyectosControlller.listado);

module.exports = router;