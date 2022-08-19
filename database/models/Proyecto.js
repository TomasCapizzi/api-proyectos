module.exports = function(sequelize, dataTypes){

    let alias = "Proyecto"

    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name:{
            type: dataTypes.STRING,
            allowNull: false
        },
        code:{
            type: dataTypes.STRING,
            //allowNull: false
        },
        date:{
            type: dataTypes.DATE,
        },
        repo:{
            type: dataTypes.STRING,
        },
        img:{
            type: dataTypes.STRING,
        },
        portada:{
            type: dataTypes.STRING,
        },
        gif:{
            type: dataTypes.STRING,
        },
        route: {
            type: dataTypes.STRING,
        },
        descripcion:{
            type: dataTypes.STRING,
        },
        description:{
            type: dataTypes.STRING,
        },
        tech_responsive:{
            type: dataTypes.STRING,
        },
        tech_auth: {
            type: dataTypes.STRING,
        },
        tech_db:{
            type: dataTypes.INTEGER,
        },
        tech_api:{
            type: dataTypes.INTEGER,
        },
        tech_aws:{
            type: dataTypes.INTEGER,
        },
        tech_mern:{
            type: dataTypes.INTEGER,
        },
        tech_mongoDB:{
            type: dataTypes.INTEGER,
        },
        tech_redux:{
            type: dataTypes.INTEGER,
        },
        tech_firebase:{
            type: dataTypes.INTEGER,
        },
    }

    let config = {
        tableName: "proyectos",
        timestamps: false
    }

    let Proyecto = sequelize.define(alias, cols, config);

    return Proyecto
}