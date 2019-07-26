/**
 * Entrenador.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type: 'string',
      required: true,
    },
    apellido:{
      type: 'string',
      required: true,
    },
    fechaNacimiento:{
      type: 'string',
      required: true
    },
    medallas:{
      type: 'number',
      required: true,
    },
    campeonActual:{
      type: 'boolean',
      defaultsTo: false
    },
    fkCajero:{
      model:'cajero',
      required:true
    },
    arregloPokemons:{
      collection: 'pokemon',
      via: 'fkEntrenador'
    }
  },

};

