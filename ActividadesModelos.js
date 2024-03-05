const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');
const conexion = require('../conexion')

class ActividadesModelos{
  todos() {
    return new Promise((resolve,reject)=>{
      let consulta = "SELECT * FROM actividades"
      conexion.query(consulta,function(error,results,fields){
        if(error){
         reject(error)
        }else{
          resolve(results)
        }
      })
    });
  }
  uno(idReq) {
    
     return new Promise((resolve,reject)=>{
      let consulta = `SELECT  * FROM actividades WHERE id=${idReq}`
      conexion.query(consulta,function(error,results,fields){
        if(error){
          reject(error)
        }else{
          resolve(results)
        }
      })
     })
  
    
  }
  crear(actividades){
    return new Promise((resolve, reject) => {
      let nombreAC = actividades.nombre
      let tipoAC = actividades.tipo
      let semanaAC = actividades.semana
        let consulta = `INSERT INTO actividades (nombre, tipo, semana, id) VALUES (${nombreAC}, ${tipoAC}, ${semanaAC},""}`
        conexion.query(consulta,function(error,results,fields){
          if(error){
            reject(error)
          }else{
            resolve(results)

          }
        })
    })
  }

  modificar(idReq, nuevosValores) {
    let nombreAC = nuevosValores.nombre
    let tipoAC = nuevosValores.tipo
    let semanaAC = nuevosValores.semana
    let consulta = `UPDATE actividades SET nombre = '${nombreAC}', tipo = '${tipoAC}', semana = '${semanaAC}' WHERE id = ${idReq}`
    conexion.query(consulta,function(error,results,fields){
      if(error){
        reject(error)
      }else{
        resolve(results)
     }
    }
  )}
  
  
eliminar(idElemento){
    return new Promise((resolve, reject) => {
        let consulta = `DELETE FROM actividades WHERE id=${idElemento}`
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

module.exports = new ActividadesModelos(); 