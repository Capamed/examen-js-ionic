/**
 * EntrenadorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

declare var Entrenador; 

module.exports = {
    buscar: async (req,res)=>{
        const parametros = req.allParams();
        const nombreCajero = parametros.nombre;
        if(nombreCajero){
            try {
                const cajeroEncontrado = await Entrenador.find({
                    where:{
                        nombre:nombreCajero
                    }
                });

               if(cajeroEncontrado.length == 0){
                    return res.ok(false);
               }else{
                    return res.ok(cajeroEncontrado);
               }

            } catch (error) {
                return res.serverError({
                    error: 500,
                    mensaje:'Error del servidor'
                });
            }
        }else{
            return res.badRequest({
                error: 400,
                mensaje: 'No envio el parametro nombre'
            });
        }
    }

};

