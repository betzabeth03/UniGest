const e = require('express');
const connection = require('../connection')
const PMSControllers = require("../controllers/PMSControllers");
class ProfessorsModels{
  All() {
    return new Promise((resolve,reject)=>{
      let consult = "SELECT * FROM profesores"
      connection.query(consult,function(error,results,fields){
        if(error){
         reject(error)
        }else{
          console.log("llegue")
          PMSControllers.All()
          .then((pms) => {
            for (let i = 0; i < results.length; i++) {
              results[i].materias_Secciones = []
              
              for (let j = 0; j < pms.length; j++) {
                if (results[i].id == pms[j].idProf) {
                  results[i].materias_Secciones.push(pms[j].materia+ " " +pms[j].seccion)
                }
              }
            }
            resolve(results)
          }).catch((e) => {
            reject(e)
          });
        }
      })
    });
  }
  
  Create(usuario){
    return new Promise((resolve, reject) => {
      let nombreUS = usuario.nombre
      let apellidoUS = usuario.apellido
      if(nombreUS && apellidoUS){
        let consult = `INSERT INTO profesores (nombre, apellido, id) VALUES ('${nombreUS}','${apellidoUS}',"")`
        connection.query(consult,function(error,results,fields){
         if(error){
           reject(error)
         }else{
           resolve(results)
         }
        })
      }else{
        reject(new Error( 'No se enviaron los datos completos'))
      }
     
           
    })
  }
 Modify(idReq, nuevosValores) {
  return new Promise((resolve, reject) => {
    let nombreUs = nuevosValores.nombre
    let apellidoUS= nuevosValores.apellido
    let consult = `UPDATE profesores SET nombre = '${nombreUs}', apellido = '${apellidoUS}' WHERE id = ${idReq}`
    connection.query(consult,function(error,results,fields){
      if(error){
        reject(error)
      }else{
        resolve(results)
      }
    })
  });
}
  
Delete(idElemento){
  return new Promise((resolve,reject)=>{
    let consult = `DELETE FROM profesores WHERE id = ${idElemento}`
    connection.query(consult,function(error,results,fields){
      if(error){
        reject(error)
      }else{
        resolve(results)
      }
    })
  })


}

}

module.exports = new ProfessorsModels(); 