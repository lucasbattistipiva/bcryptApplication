const { Sequelize } = require('sequelize')
const dotenv = require(`dotenv`)

dotenv.config()

const { DB_NAME,DB_USER,DB_PASS} = process.env
const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASS,{
    host: "localhost",
    dialect: "mysql"
})

// sequelize.authenticate().then(()=>{
//     console.log("Banco de dados conectado!")
// }).catch((err)=>{
//     console.error("Erro de conexão com o banco de dados!", err)
// })

module.exports = sequelize