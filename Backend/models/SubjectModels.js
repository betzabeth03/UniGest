const connection = require('../connection')
class SubjectsModels{
    All(){
      return new Promise((resolve,reject)=>{
        let consult = "SELECT * FROM materias"
        connection.query(consult,function(error,results,fields){
          if(error){
           reject(error)
          }else{
            resolve(results)
          }
        })
      });
    }
   
    
    Create(registro){
      return new Promise((resolve, reject) => {
        let nombreR = registro.nombre
        let diaClase = null
        let diaUpper = registro.dia.charAt(0).toUpperCase() + registro.dia.slice(1)
        switch(diaUpper){
          case "Lunes": diaClase = 1 
          break;
          case "Martes": diaClase = 2 
          break;
          case "Miercoles": diaClase = 3
          break;
          case "Jueves": diaClase = 4
          break;
          case "Viernes": diaClase = 5
          break;
          case "Sabado": diaClase = 6
          break;
          case "Domingo": diaClase = 0
          break;
  
        }
             let consult = `INSERT INTO materias (nombre,diaClase) VALUES ('${nombreR}','${diaClase}')`
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
        let consult = `UPDATE materias SET nombre = '${nombreR}' WHERE id = ${idReq}`
        connection.query(consult,function(error,results,fields){
          if(error){
            reject(error)
          }else{
            resolve(results)
         }
        })
      })
      
    }
    
    
  Delete(idElemento){
    return new Promise((resolve, reject) => {
        let consult = `DELETE FROM materias WHERE id=${idElemento}`
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
module.exports = new SubjectsModels