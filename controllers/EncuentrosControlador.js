var EncuentrosModelos = require("../models/EncuentrosModelos");


class EncuentrosControladores{
    todos(){
      return new Promise((resolve, reject) => {   
        let prueba= EncuentrosModelos.todos();
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
      })
    }
    uno(idReq) {
      return new Promise((resolve,reject)=>{
       let prueba= EncuentrosModelos.uno(idReq);
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
  
      })
    }
    crear(registro){
      return new Promise((resolve, reject) =>{
        let prueba= EncuentrosModelos.crear(registro);
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
        
    })
      
    }
    modificar(idReq, nuevosValores){
      return new Promise((resolve, reject) => {   
        let prueba= EncuentrosModelos.modificar(idReq,nuevosValores);
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
      })
  
    }
    eliminar(idElemento){
      return new Promise((resolve, reject) =>{
        let prueba= EncuentrosModelos.eliminar(idElemento);
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
  
      })
    }
  }
  module.exports = new EncuentrosControladores();