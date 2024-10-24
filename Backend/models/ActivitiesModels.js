const connection = require('../connection')
const APMSControllers = require("../controllers/APMSControllers");

class ActivitiesModels{
  All() {
    return new Promise((resolve,reject)=>{
      let consult = "SELECT * FROM actividades"
      connection.query(consult,function(error,results,fields){
        if(error){
         reject(error)
        }else{
          APMSControllers.All()
          .then((apms) => {
            for (let i = 0; i < results.length; i++) {
              results[i].Clase = []
              for (let j = 0; j < apms.length; j++) {
                if (results[i].id == apms[j].idAct) {
                  results[i].Clase.push(apms[j].profesor+ " " +apms[j].materia+ " " +apms[j].seccion)
                }
              }
            }
            resolve(results)
          }).catch((e) => {
            reject(e)
          })
        }
      })
    });
  }

  Create(actividades){
    return new Promise((resolve, reject) => {
      let nombreAC = actividades.nombre
      let descripcionAC = actividades.descripcion
      let semanaAC = actividades.semana
      if(!nombreAC||!descripcionAC||!semanaAC||nombreAC.trim()===" "||descripcionAC.trim()===""||semanaAC.trim()===""){
        reject(new Error("No se pueden enviar datos vacios"))
      }
      let consult = `INSERT INTO actividades (nombre, descripcion, semana, id) VALUES ('${nombreAC}','${descripcionAC}',${semanaAC}, "")`
        connection.query(consult,function(error,results,fields){
          if(error){
            reject(error)
          }else{
            resolve(results)

          }
        })
    })
  }

  Modify(idReq, nuevosValores) {
    return new Promise((resolve,reject)=>{
      let nombreAC = nuevosValores.nombre
      let descripcionAC = nuevosValores.descripcion
      let semanaAC = nuevosValores.semana
      if(!nombreAC||!descripcionAC||!semanaAC||nombreAC.trim()===" "||descripcionAC.trim()===""||semanaAC.trim()===""){
        reject(new Error("No se pueden enviar datos vacios"))
      }
      let consult = `UPDATE actividades SET nombre = '${nombreAC}', descripcion = '${descripcionAC}', semana = '${semanaAC}' WHERE id = ${idReq}`
      connection.query(consult,function(error,results,fields){
        if(error){
          reject(error)
        }else{
          if(results.length===0){
            reject(new Error("No se encontro la actividad"))
        }
          resolve(results)
       }
      }
    )
    })
    }
  
  
Delete(idElemento){
    return new Promise((resolve, reject) => {
        let consult = `DELETE FROM actividades WHERE id=${idElemento}`
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

module.exports = new ActivitiesModels(); 