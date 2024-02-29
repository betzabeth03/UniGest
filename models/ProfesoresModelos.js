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
          conexion.end()
        }
      })
    });
  }
  uno(idReq) {
    
      for(let i=0;i<ProfesoresArr.length;i++){
        if(idReq==ProfesoresArr[i].id){
          return ProfesoresArr[i]
        }
      }
  
    
  }
  crear(usuario){
    return new Promise((resolve, reject) => {
            usuario.id = uuidv4();
            ProfesoresArr.push(usuario);
            resolve();
    })
  }
 modificar(idReq, nuevoNombre) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < ProfesoresArr.length; i++) {
      if (idReq == ProfesoresArr[i].id) {
        ProfesoresArr[i].nombre = nuevoNombre;
        resolve(ProfesoresArr[i]);
      }
    }
    ;
  });
}
  
eliminar(idElemento){
  for(let i=0;i<ProfesoresArr.length;i++){
    if(idElemento==ProfesoresArr[i].id){
      let index = ProfesoresArr.indexOf(idElemento)
      ProfesoresArr.splice(index,1);
      return 1
    }
  }


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