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
    editar(id,datos){
        return new Promise((resolve,reject)=>{
            let id_profesorVar = datos.id_profesor
            let id_materiaVar= datos.id_materia
            let id_seccionVar = datos.id_seccion  
            let id_actividadesVar = datos.id_actividades
            let id_eventosVar = datos.id_eventos
            let consulta = `UPDATE relaciones SET id_profesor = ${id_profesorVar}, id_materia = ${id_materiaVar}, id_seccion = ${id_seccionVar}, id_actividades = ${id_actividadesVar}, id_eventos = ${id_eventosVar} WHERE id = ${id} `
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
    profesores_materias_secciones(){
        return new Promise((resolve,reject)=>{
            let consulta = 'SELECT profesores.nombre AS profesor, materias.nombre AS materia, secciones.nombre AS seccion FROM profesores JOIN relaciones ON profesores.id = relaciones.id_profesor JOIN materias ON relaciones.id_materia = materias.id JOIN secciones ON relaciones.id_seccion = secciones.id'
            conexion.query(consulta,function(error,results,fields){
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        })
    }
    secciones_eventos(){
        return new Promise((resolve,reject)=>{
            let consulta = 'SELECT secciones.nombre AS seccion, eventos.nombre AS nombreEvento, eventos.tipo AS tipoDeEvento, eventos.fecha AS fecha FROM secciones JOIN relaciones ON secciones.id = relaciones.id_seccion JOIN eventos ON relaciones.id_eventos = eventos.id'
            conexion.query(consulta,function(error,results,fields){
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        })
    }
    materias_actividades(){
        return new Promise((resolve,reject)=>{
            let consulta = 'SELECT materias.nombre AS materia,actividades.nombre AS actividad,actividades.tipo AS tipoDeActividad, actividades.semana AS semanaActividad FROM materias JOIN relaciones ON materias.id = relaciones.id_materia JOIN actividades ON relaciones.id_actividades = actividades.id'
            conexion.query(consulta, function(error,results,fields){
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