/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type:'string',
      required: true,
    },
    poderEspecial:{
      type:'string',
      required: true,
    },
    fechaCaptura:{
      type:'string',
      required: true,
    },
    nivel:{
      type:'number',
      required: true,
    },
    costo:{
      type:'number',
      required: true,
    },
    fkEntrenador:{
      model:'entrenador',
      required:true
    },

  },

};

