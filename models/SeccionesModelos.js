const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');
const conexion = require('../conexion')

class SeccionesModelos{
  todos() {
    return new Promise((resolve,reject)=>{
      let consulta = "SELECT * FROM secciones"
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
      let consulta = `SELECT  * FROM secciones WHERE id=${idReq}`
      conexion.query(consulta,function(error,results,fields){
        if(error){
          reject(error)
        }else{
          resolve(results)
        }
      })
     })
    }

    crear(registro){
      return new Promise((resolve, reject) => {
        let nombreR = registro.nombre
        let periodoAcademicoR= registro.periodoAcademico
        let periodoDate = new Date(periodoAcademicoR)
        let periodoAcademicoIso = periodoDate.toISOString().slice(0,10).replace('T','')
             let consulta = `INSERT INTO secciones (nombre, periodoAcademico, id) VALUES ('${nombreR}', '${periodoAcademicoIso}', "")`
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
        let nombreR = nuevosValores.nombre
        let periodoAcademicoR= nuevosValores.periodoAcademico
        let periodoDate = new Date(periodoAcademicoR)
        let periodoAcademicoIso = periodoDate.toISOString().slice(0,10).replace('T','')
        let consulta = `UPDATE secciones SET nombre = '${nombreR}', periodoAcademico = '${periodoAcademicoIso}' WHERE id = ${idReq}`
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

    eliminar(idElemento){
      return new Promise((resolve, reject) => {
          let consulta = `DELETE FROM secciones WHERE id=${idElemento}`
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
//

module.exports = new SeccionesModelos(); 