var express = require('express');
var router = express.Router();
var proyectosControlller = require('../controllers/proyectosController')

// GET Listado Proyectos 
router.get('/', proyectosControlller.listado);
// GET Detalle Proyecto
router.get('/:id', proyectosControlller.detail);

module.exports = router;