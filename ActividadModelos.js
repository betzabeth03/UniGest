const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');
const conexion = require('../conexion')
let ActividadArr = [
   {
        nombre: "examen",
        id: 1,
        idSeccion:1,
        fecha: 2/4/2024
        
   }
]

let ArrTemp = []

class ActividadModelos{
  todos() {
    return new Promise((resolve,reject)=>{
      let consulta = "SELECT * FROM actividad"
      conexion.query(consulta,function(error,results,fields){
        if(error){
         reject(error)
        }else{
          ActividadArr = results
          resolve(ActividadArr)
          conexion.end()
        }
      })
    });
  }
  uno(idReq) {
    
     return new Promise((resolve,reject)=>{
      let consulta = `SELECT  * FROM actividad WHERE id=${idReq}`
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
  crear(actividad){
    return new Promise((resolve, reject) => {
      let nombreAC = actividad.nombre
      let fechaAC = actividad.fecha
      let seccionAC = actividad.secc
        let consulta = `INSERT INTO actividad (nombre, id, idSeccion, fecha) VALUES (${nombreAC},"", ${seccionAC}, ${fechaAC})}`
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
    let nombreAC = nuevosValores.nombre
    let fechaAC = nuevosValores.fecha
    let seccionAC = nuevosValores.secc
    let consulta = `UPDATE actividad SET nombre = '${nombreAC}', idSeccion = '${seccionAC}', fecha = '${fechaAC}', WHERE id = ${idReq}`
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
        let consulta = `DELETE FROM actividad WHERE id=${idElemento}`
          conexion.query(consulta,function(error,results,fields){
            if(error){
              reject(error)
            }else{
              resolve(results)
              conexion.end()
            }
          })
         })

    
/*
  for(let i=0;i<ProfesoresArr.length;i++){
    if(idElemento==ProfesoresArr[i].id){
      let index = ProfesoresArr.indexOf(idElemento)
      ProfesoresArr.splice(index,1);
      return 1
    }
  }*/
}
}

module.exports = new ActividadModelos(); 