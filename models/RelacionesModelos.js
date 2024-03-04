const conexion = require('../conexion')

class RelacionesModelos{
    crear(datos){
        return new Promise((resolve,reject)=>{
            let id_profesor = datos.id_profesor
            let id_materia= datos.id_materia
            let id_seccion = datos.id_seccion  
            let id_actividades = datos.id_actividades
            let id_eventos = datos.id_eventos
            let consulta = `INSERT INTO relaciones (id_profesor,id_materia,id_seccion,id_actividades,id_eventos) VALUES (${id_profesor},${id_materia},${id_seccion},${id_actividades},${id_eventos})`
            conexion.query(consulta,function(error,results,fields){
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        })
    }
    profesores_materias(){
        return new Promise((resolve,reject)=>{
            let consulta = 'SELECT profesores.nombre AS profesor, materias.nombre AS materia FROM profesores JOIN relaciones ON profesores.id = relaciones.id_profesor JOIN materias ON relaciones.id_materia = materias.id'
            conexion.query(consulta,function(error,results,fields){
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        })
    }
}
module.exports= new RelacionesModelos