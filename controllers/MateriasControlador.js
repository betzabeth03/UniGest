const MateriasModelos = require("../models/MateriasModelos");


class MateriasControladores{
    todos(){
      return new Promise((resolve, reject) => {   
        //resolve(MateriasModelos.todos());
        let prueba= MateriasModelos.todos();
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
      })
    }
    uno(idReq) {
      return new Promise((resolve,reject)=>{
       //resolve(MateriasModelos.uno(idReq))  
       let prueba= MateriasModelos.uno(idReq);
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
  
      })
    }
    crear(usuario){
      return new Promise((resolve, reject) =>{
        //resolve(MateriasModelos.crear(usuario));
        let prueba= MateriasModelos.crear(usuario);
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
        
    })
      
    }
    modificar(idReq, nuevoNombre){
      return new Promise((resolve, reject) => {   
        //resolve(MateriasModelos.modificar(idReq, nuevoNombre));
        let prueba= MateriasModelos.modificar(idReq,nuevoNombre);
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
      })
  
    }
    eliminar(idElemento){
      return new Promise((resolve, reject) =>{
        //resolve(MateriasModelos.eliminar(idElemento));
        let prueba= MateriasModelos.eliminar(idElemento);
        if(prueba){
          resolve(prueba);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
  
      })
    }
  }
  module.exports = new MateriasControladores();