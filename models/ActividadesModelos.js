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
      let fechaAC = actividades.fecha
      let seccionAC = actividades.secc
        let consulta = `INSERT INTO actividades (nombre, id, idSeccion, fecha) VALUES (${nombreAC},"", ${seccionAC}, ${fechaAC})}`
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
    let fechaAC = nuevosValores.fecha
    let seccionAC = nuevosValores.secc
    let consulta = `UPDATE actividades SET nombre = '${nombreAC}', idSeccion = '${seccionAC}', fecha = '${fechaAC}', WHERE id = ${idReq}`
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