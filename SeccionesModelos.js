const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');

let SeccionesArr = [
   {
    Profesor: "Maria",
    materia: 1,
    seccion:2
        
   }
]

class SeccionesModelos{
  todos() {
    return new Promise((resolve,reject)=>{
      let consulta = "SELECT * FROM secciones"
      conexion.query(consulta,function(error,results,fields){
        if(error){
         reject(error)
        }else{
          SeccionesArr = results
          resolve(SecionesArr)
          conexion.end()
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
          conexion.end()
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
                conexion.end()
              }
            })
           })
  
  
  
  }
  

}
//

module.exports = new SeccionesModelos(); 