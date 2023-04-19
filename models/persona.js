const mongoose = require('mongoose');
const validadores = require('./personaValidador');

const personaSchema = mongoose.Schema({

    cedula:{
        type: Number,
        required: true,
        validate : {
            validator: validadores.soloNumeros
        }
    },

    nombre:{
        type: String,
        required: true,
        validate : {
            validator: validadores.soloTexto
        }
    },

    telefono:{
        type: Number,
        required: true,
        validate : {
            validator: validadores.soloNumeros
        }
    },
})

module.exports = mongoose.model('Persona', personaSchema);