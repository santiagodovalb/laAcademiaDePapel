const Entradas = require('../models/entradas')

const entradasController = {

    findAll(req, res, next) {
        Entradas.findAll()
        .then(entradas => res.status(200).send(entradas))
    }
}

module.exports = entradasController