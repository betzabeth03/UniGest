const conexion = require('../connection')

class p_m_sModelos{
    CreatePMS(data){
        return new Promise((resolve,reject)=>{
            let idProfesor = data.idProfesor
            let idMaterias= data.idMaterias
            let idSecciones = data.idSecciones  
            let consulta = `INSERT INTO p_m_s (idProfesor,idMaterias,idSecciones) VALUES (${idProfesor},${idMaterias},${idSecciones})`
            conexion.query(consulta,function(error,results,fields){
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        })
    }
    CreateAPMS(data){
        return new Promise((resolve,reject)=>{
            let idPMS = data.idPMS
            let idActividades = data.idActividades
            let consulta = `INSERT INTO a_p_m_s (idPMS,idActividades) VALUES (${idPMS},${idActividades})`
            conexion.query(consulta,function(error,results,fields){
                if(error){
                    reject(error)
                }else{
                    resolve(results)
                }
            })
        })
    }
    editar(id,data){
        return new Promise((resolve,reject)=>{
            let idProfesorVar = data.idProfesor
            let idMateriasVar= data.idMaterias
            let idSeccionesVar = data.idSecciones  
            let idActividadesVar = data.idActividades
            letVar = data
            let consulta = `UPDATE p_m_s SET idProfesor = ${idProfesorVar}, idMaterias = ${idMateriasVar}, idSecciones = ${idSeccionesVar}, idActividades = ${idActividadesVar}, = $Var} WHERE id = ${id} `
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
    profesores_materias_secciones(){
        return new Promise((resolve,reject)=>{
            let consulta = 'SELECT profesores.nombre AS profesor, materias.nombre AS materia, secciones.nombre AS seccion, actividades.nombre AS actividades FROM profesores  JOIN p_m_s ON profesores.id = p_m_s.idProfesor JOIN materias ON p_m_s.idMaterias = materias.id JOIN secciones ON p_m_s.idSecciones = secciones.id JOIN actividades ON p_m_s.idMaterias = actividades.materia'
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
    eliminar(idElemento){
        return new Promise((resolve,reject)=>{
            let consulta = `DELETE FROM p_m_s WHERE id = ${idElemento}`
            conexion.query(consulta,function(error,results,fields){
              if(error){
                reject(error)
              }else{
                resolve(results)
              }
            })
          })
        
        
    }
    prueba() {
        return new Promise((resolve, reject) => {
            let consult = `
                SELECT actividades.nombre AS actividad, profesores.nombre AS profesor, materias.nombre AS materia, secciones.nombre AS seccion,DATE_ADD(secciones.periodoAcademico, interval actividades.semana week) AS fechaActividad
                FROM actividades
                JOIN a_p_m_s ON actividades.id = a_p_m_s.idActividades
                JOIN p_m_s ON p_m_s.id = a_p_m_s.idPMS
                JOIN profesores ON p_m_s.idProfesor = profesores.id
                JOIN materias ON p_m_s.idMaterias = materias.id
                JOIN secciones ON p_m_s.idSecciones = secciones.id
            `;
            conexion.query(consult, function (error, results, fields) {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    }
}
module.exports= new p_m_sModelos