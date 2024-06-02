const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Usuario = db.define('usuarios',{
    nome: {
        type: DataTypes.STRING(30)
    },
    email: {
        type: DataTypes.STRING(60)
    },
    senha: {
        type: DataTypes.STRING(100)
    }
},{
    createdAt: false,
    updatedAt: false
})

// Usuario.sync({force: true})

module.exports = Usuario