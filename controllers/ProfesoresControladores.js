var ProfesoresModelos = require("../models/ProfesoresModelos");

class ProfesoresControladores{
  todos() {
    return new Promise((resolve, reject) => {   
     let promesa = ProfesoresModelos.todos();
        if(promesa){
          resolve(promesa);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
    })
  }
  uno(idReq) {
    return new Promise((resolve,reject)=>{
      let promesa= ProfesoresModelos.uno(idReq);
        if(promesa){
          resolve(promesa);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }

    })
  }
  crear(usuario){
    return new Promise((resolve, reject) =>{
        let promesa= ProfesoresModelos.crear(usuario);
        if(promesa){
          resolve(promesa);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
      
  })
    
  }
  modificar(idReq, nuevosValores){
    return new Promise((resolve, reject) => {   
      let promesa = ProfesoresModelos.modificar(idReq,nuevosValores);
        if(promesa){
          resolve(promesa);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
    })

  }
  eliminar(idElemento){
    return new Promise((resolve, reject) =>{
      let promesa= ProfesoresModelos.eliminar(idElemento);
        if(promesa){
          resolve(promesa);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }

    })
  }
  materiasAsociadasUno(idReq){
    return new Promise((resolve,reject)=>{
      let promesa = ProfesoresModelos.materiasAsociadasUno(idReq)
      if(promesa){
        resolve(promesa)
       }else{
        reject(new Error("Ha ocurrido un error"))
       }
    })
  }
  materiasAsociadasTodos(){
    return new Promise((resolve,reject)=>{
      let promesa = ProfesoresModelos.materiasAsociadasTodos()
      if(promesa){
        resolve(promesa)
       }else{
        reject(new Error("Ha ocurrido un error"))
       }
    })
  }
  eliminarRelacion(idProf,idMateria){
    return new Promise((resolve,reject)=>{
      let promesa = ProfesoresModelos.eliminarRelacion(idProf,idMateria)
      if(promesa){
        resolve(promesa)
       }else{
        reject(new Error("Ha ocurrido un error"))
       }
    })
  }
  }


module.exports = new ProfesoresControladores();
