var ActividadModelos = require("../models/ActividadModelos");

//
class ActividadControladores{
    todos(){
      return new Promise((resolve, reject) => {   
        let prueba= ActividadModelos.todos();
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
      })
    }
    uno(idReq) {
      return new Promise((resolve,reject)=>{
       let prueba= ActividadModelos.uno(idReq);
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
  
      })
    }
    crear(actividad){
      return new Promise((resolve, reject) =>{
        let prueba= ActividadModelos.crear(actividad);
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
        
    })
      
    }
    modificar(idReq, nuevosValores){
      return new Promise((resolve, reject) => {   
        let prueba= ActividadModelos.modificar(idReq,nuevosValores);
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
      })
  
    }
    eliminar(idElemento){
      return new Promise((resolve, reject) =>{
        let prueba= ActividadModelos.eliminar(idElemento);
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
  
      })
    }
  }
  module.exports = new ActividadControladores();