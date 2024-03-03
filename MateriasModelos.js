const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');
let MateriasArr = [
    {
        nombre:"Matematicas",
        id:"1",

    }
]


class MateriasModelos{
    todos(){
      return new Promise((resolve,reject)=>{
        let consulta = "SELECT * FROM materias"
        conexion.query(consulta,function(error,results,fields){
          if(error){
           reject(error)
          }else{
            MateriasArr = results
            resolve(MateriasArr)
            conexion.end()
          }
        })
      });
    }
    uno(idReq) {
      return new Promise((resolve,reject)=>{
        let consulta = `SELECT  * FROM materias WHERE id=${idReq}`
        conexion.query(consulta,function(error,results,fields){
          if(error){
            reject(error)
          }else{
            resolve(results)
            conexion.end()
          }
        })
       })
    
    }
    
    crear(registro){
      return new Promise((resolve, reject) => {
        let nombreR = registro.nombre
        let codigoR= registro.codigo
             let consulta = `INSERT INTO materias (nombre, id, código) VALUES ('${nombreR}',"", '${codigoR}')`
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
      let nombreR = nuevosValores.nombre
      let codigoR = nuevosValores.codigo
      let consulta = `UPDATE materias SET nombre = '${nombreR}', código = '${codigoR}' WHERE id = ${idReq}`
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
        let consulta = `DELETE FROM materias WHERE id=${idElemento}`
          conexion.query(consulta,function(error,results,fields){
            if(error){
              reject(error)
            }else{
              resolve(results)
              conexion.end()
            }
          })
         })
        }
}
module.exports = new MateriasModelos