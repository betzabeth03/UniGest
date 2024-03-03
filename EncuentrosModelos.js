const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');
const conexion = require('../conexion')
let   EncuentrosArr = [
   {
       fecha: 3/3/2024,
       id: 1,
       tipo: "presencial",
       lugar:"SedeEsto",
       idSeccion: 1



   }
]

let ArrTemp = []

class EncuentrosModelos{
  todos() {
    return new Promise((resolve,reject)=>{
      let consulta = "SELECT * FROM encuentros"
      conexion.query(consulta,function(error,results,fields){
        if(error){
         reject(error)
        }else{
          EncuentrosArr = results
          resolve(EncuentrosArr)
          conexion.end()
        }
      })
    });
  }

  uno(idReq) {
     return new Promise((resolve,reject)=>{
      let consulta = `SELECT  * FROM encuentros WHERE id=${idReq}`
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
      let fechaR = registro.fecha
      let tipoR = registro.tipo
      let SeccionR = registro.sec
        let consulta = `INSERT INTO encuentros (fecha, id, tipo, idSeccion) VALUES ('${fechaR}',"",'${tipoR}','${SeccionR}')}`
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
 modificar(idReq, nuevosValores) {
  let fechaR = nuevosValores.fecha
  let tipoR = nuevosValoreso.tipo
  let SeccionR = nuevosValores.sec
    let consulta = `UPDATE encuentros SET fecha = '${fechaR}', tipo = '${tipoR}', idSeccion = '${SeccionR}',  WHERE id = ${idReq}`
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
        let consulta = `DELETE FROM encuentros WHERE id=${idElemento}`
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

module.exports = new EncuentrosModelos(); 