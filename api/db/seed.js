const Entradas = require('../models/entradas')

const blog = [{
        titulo: 'Antropologia cosmica',
        contenido: 'Lo mas de lo mas, lo mejor. Tremendo'
    }, {
        titulo: 'Generacion antartica',
        contenido: 'No tengo palabras'
    }]



Entradas.bulkCreate(blog)