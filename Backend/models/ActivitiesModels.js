const connection = require('../connection')

class ActivitiesModels{
  All() {
    return new Promise((resolve,reject)=>{
      let consult = "SELECT * FROM actividades"
      connection.query(consult,function(error,results,fields){
        if(error){
         reject(error)
        }else{
          resolve(results)
        }
      })
    });
  }

  Create(actividades){
    return new Promise((resolve, reject) => {
      let nombreAC = actividades.nombre
      let descripcionAC = actividades.descripcion
      let semanaAC = actividades.semana
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
      let consult = `UPDATE actividades SET nombre = '${nombreAC}', descripcion = '${descripcionAC}', semana = '${semanaAC}' WHERE id = ${idReq}`
      connection.query(consult,function(error,results,fields){
        if(error){
          reject(error)
        }else{
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