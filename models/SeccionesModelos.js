const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');

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
             let consulta = `INSERT INTO secciones (nombre, id) VALUES ('${nombreR},"")`
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
      let consulta = `UPDATE secciones SET nombre = '${nombreR}' WHERE id = ${idReq}`
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