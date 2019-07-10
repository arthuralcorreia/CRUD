const Sequelize = require("sequelize")

//conexão com o banco de dados MySQL
const sequelize = new Sequelize(//select database, select user, put the password, {
    host://select the host,
    dialect: //select the kind of database.
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
