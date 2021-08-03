const S = require("sequelize");
const db = require("../db")

class Entradas extends S.Model {}

Entradas.init({
    titulo: {
        type: S.STRING,
        allowNull: false
    },
    contenido: {
        type: S.TEXT,
        allowNull: false
    },
}, { sequelize: db, timestamps: true, modelName: "entradas" })

module.exports = Entradas