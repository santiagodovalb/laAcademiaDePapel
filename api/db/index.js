const Sequelize = require("sequelize")

const client = new Sequelize("postgres://postgres:postgres@localhost/adp", {
    logging: false,
    dialect: "postgres"
})

module.exports = client;