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
    detail: function(req,res){
        db.Proyecto.findByPk(req.params.id)
            .then(function(proyecto){
                return res.json({
                    proyecto
                })
            })
    }
}

module.exports = proyectosController;