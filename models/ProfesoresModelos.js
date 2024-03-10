const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');
const conexion = require('../conexion')

class ProfesoresModelos{
  todos() {
    return new Promise((resolve,reject)=>{
      let consulta = "SELECT * FROM profesores"
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
      let consulta = `SELECT  * FROM profesores WHERE id=${idReq}`
      conexion.query(consulta,function(error,results,fields){
        if(error){
          reject(error)
        }else{
          resolve(results)
        }
      })
     })
  
    
  }
  crear(usuario){
    return new Promise((resolve, reject) => {
      let nombreUS = usuario.nombre
      let apellidoUS = usuario.apellido
           let consulta = `INSERT INTO profesores (nombre, apellido, id) VALUES ('${nombreUS}','${apellidoUS}',"")`
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
  return new Promise((resolve, reject) => {
    let nombreUs = nuevosValores.nombre
    let apellidoUS= nuevosValores.apellido
    let consulta = `UPDATE profesores SET nombre = '${nombreUs}', apellido = '${apellidoUS}' WHERE id = ${idReq}`
    conexion.query(consulta,function(error,results,fields){
      if(error){
        reject(error)
      }else{
        resolve(results)
      }
    })
  });
}
  
eliminar(idElemento){
  return new Promise((resolve,reject)=>{
    let consulta = `DELETE FROM profesores WHERE id = ${idElemento}`
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

module.exports = new ProfesoresModelos(); 