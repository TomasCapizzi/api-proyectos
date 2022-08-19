let db = require('../database/models')
let proyectosController = {
    listado: function(req,res){
        db.Proyecto.findAll()
            .then(function(proyectos){
                return res.json({
                    total: proyectos.length,
                    data: proyectos,
                    status: 200
                })
            })
    },
}

module.exports = proyectosController;