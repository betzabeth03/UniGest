const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');
const conexion = require('../conexion')
let ProfesoresArr = [
   {
    nombre: "Maria",
        materias: [1,2,3],
        eventos:[1,4,2], 
        id:1,
        seccion:2
        
   }
]
let ArrTemp = []

class ProfesoresModelos{
  todos() {
    return new Promise((resolve,reject)=>{
      let consulta = "SELECT * FROM profesores"
      conexion.query(consulta,function(error,results,fields){
        if(error){
         reject(error)
        }else{
          ProfesoresArr = results
          resolve(ProfesoresArr)
        }
      })
    });
  }
  uno(idReq) {
    
     return new Promise((resolve,reject)=>{
      let consulta = `SELECT  * FROM profesores WHERE id=${idReq}`
      conexion.query(consulta,function(error,results,fields){
        if(error){
          reject(error)
        }else{
          resolve(results)
        }
      })
     })
  
    
  }
  crear(usuario){
    return new Promise((resolve, reject) => {
      let nombreUS = usuario.nombre
      let CI_US = usuario.CI
           let consulta = `INSERT INTO profesores (nombre,CI, id) VALUES ('${nombreUS}',${CI_US},"")`
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
  return new Promise((resolve, reject) => {
    let nombreUs = nuevosValores.nombre
    let Ci_Us = nuevosValores.CI
    let consulta = `UPDATE profesores SET nombre = '${nombreUs}', CI = ${Ci_Us} WHERE id = ${idReq}`
    conexion.query(consulta,function(error,results,fields){
      if(error){
        reject(error)
      }else{
        resolve(results)
      }
    })
  });
}
  
eliminar(idElemento){
  return new Promise((resolve,reject)=>{
    let consulta = `DELETE FROM profesores WHERE id = ${idElemento}`
    conexion.query(consulta,function(error,results,fields){
      if(error){
        reject(error)
      }else{
        resolve(results)
      }
    })
  })


}
materiasAsociadasUno(idReq){
  for(let i=0;i<ProfesoresArr.length;i++){
    if(idReq==ProfesoresArr[i].id){
      return "El profesor "+ProfesoresArr[i].nombre +" Da clases en las materias con Id:  " + ProfesoresArr[i].materias
    }
  }
}
materiasAsociadasTodos(){
  ArrTemp = []
  for(let i=0;i<ProfesoresArr.length;i++){
    ArrTemp.push("El profesor "+ProfesoresArr[i].nombre +" Da clases en las materias con Id:  " + ProfesoresArr[i].materias)
  }
  return ArrTemp
}
eliminarRelacion(idProf,idMateria){
  for(let i=0;i<ProfesoresArr.length;i++){
    if(idProf==ProfesoresArr[i].id){
      for(let j=0;j<ProfesoresArr[i].materias.length;j++){
        if(idMateria==ProfesoresArr[i].materias[j]){
          let index = j
          ProfesoresArr[i].materias.splice(index,1)
          return 1
        }
      }
    }
  }
}
}

module.exports = new ProfesoresModelos(); 