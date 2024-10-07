const conexion = require('../connection')

class p_m_sModelos{
   
    
    
    profesores_materias(){
        return new Promise((resolve,reject)=>{
            let consulta = 'SELECT profesores.nombre AS profesor, materias.nombre AS materia FROM profesores JOIN p_m_s ON profesores.id = p_m_s.idProfesor JOIN materias ON p_m_s.idMaterias = materias.id'
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
            let consulta = 'SELECT materias.nombre AS materia,actividades.nombre AS actividad,actividades.tipo AS tipoDeActividad, actividades.semana AS semanaActividad FROM materias JOIN p_m_s ON materias.id = p_m_s.idMaterias JOIN actividades ON p_m_s.idActividades = actividades.id'
            conexion.query(consulta, function(error,results,fields){
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        })
    }
    profesores_materias_secciones_actividades(){
        return new Promise((resolve,reject)=>{
            let consulta = 'SELECT profesores.nombre AS profesor, materias.nombre AS materia, secciones.nombre AS seccion, actividades.nombre AS nombreActividad, DATE_ADD(secciones.periodoAcademico, interval actividades.semana week) AS fechaActividad, p_m_s.id AS id, p_m_s.idProfesor AS idProfesor, p_m_s.idMaterias AS idMaterias, p_m_s.idSecciones AS idSecciones, p_m_s.idActividades AS idActividades, p_m_s AS FROM profesores JOIN p_m_s ON profesores.id = p_m_s.idProfesor JOIN materias ON p_m_s.idMaterias = materias.id JOIN secciones ON p_m_s.idSecciones = secciones.id JOIN actividades ON p_m_s.idActividades = actividades.id '
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
module.exports= new p_m_sModelos