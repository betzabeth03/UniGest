const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');
const conexion = require('../conexion')


 class EventosModelos{
    todos() {
      return new Promise((resolve,reject)=>{
        let consulta = "SELECT * FROM eventos"
        conexion.query(consulta,function(error,results,fields){
          if(error){
           reject(error)
          }else{
            resolve(results)
          }
        })
      });

      }
      
    crear(registro){
        return new Promise((resolve, reject) => {
          let nombreR = registro.nombre
          let tipoR = registro.tipo
          let fechaString = registro.fecha
          let fechaDate = new Date(fechaString)
          let fechaIso = fechaDate.toISOString().slice(0,10).replace('T', '')
            let consulta = `INSERT INTO eventos (nombre, tipo, fecha, id) VALUES ('${nombreR}', '${tipoR}', '${fechaIso}' , "")`
            conexion.query(consulta,function(error,results,fields){
              if(error){
                reject(error)
              }else{
                resolve(results)
    
              }
            })
         })
       }

uno(idReq) {
    
  return new Promise((resolve,reject)=>{
   let consulta = `SELECT  * FROM eventos WHERE id=${idReq}`
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
      return new Promise((resolve, reject) => {
          let consulta = `DELETE FROM eventos WHERE id=${idElemento}`
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
      return new Promise((resolve,reject)=>{
        let nombreEv = nuevosValores.nombre
        let tipoEv = nuevosValores.tipo
        let fechaString = nuevosValores.fecha
        let fechaDate = new Date(fechaString)
        let fechaIso = fechaDate.toISOString().slice(0,10).replace('T', '')
        let consulta = `UPDATE eventos SET nombre = '${nombreEv}', tipo = '${tipoEv}', fecha = '${fechaIso}' WHERE id = ${idReq}`
        conexion.query(consulta,function(error,results,fields){
          if(error){
            reject(error)
          }else{
            resolve(results)
         }
        }
      )
      })
      }
 }






 module.exports = new EventosModelos(); 