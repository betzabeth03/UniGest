const connection = require('../connection')

class SectionsModels{
  All() {
    return new Promise((resolve,reject)=>{
      let consult = "SELECT * FROM secciones"
      connection.query(consult,function(error,results,fields){
        if(error){
         reject(error)
        }else{
          results.forEach(Element => {
            let dateTemp = new Date(Element.periodoAcademico)
            Element.periodoAcademico = dateTemp.toISOString().slice(0,10).replace('T','')
          });
          resolve(results)
        }
      })
    });
  }
  

  

    Create(registro){
      return new Promise((resolve, reject) => {
        let nombreR = registro.nombre
        let periodoAcademicoR= registro.periodo
        console.log(periodoAcademicoR)
        let periodoDate = new Date(periodoAcademicoR)
        let periodoAcademicoIso = periodoDate.toISOString().slice(0,10).replace('T','')
        console.log(periodoAcademicoIso)
             let consult = `INSERT INTO secciones (nombre, periodoAcademico, id) VALUES ('${nombreR}', '${periodoAcademicoIso}', "")`
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
        let nombreR = nuevosValores.nombre
        let periodoAcademicoR= nuevosValores.periodo
        let periodoDate = new Date(periodoAcademicoR)
        let periodoAcademicoIso = periodoDate.toISOString().slice(0,10).replace('T','')
        let consult = `UPDATE secciones SET nombre = '${nombreR}', periodoAcademico = '${periodoAcademicoIso}' WHERE id = ${idReq}`
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
          let consult = `DELETE FROM secciones WHERE id=${idElemento}`
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
//

module.exports = new SectionsModels(); 