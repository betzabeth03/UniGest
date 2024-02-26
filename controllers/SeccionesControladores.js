var SeccionesModelos = require("../models/SeccionesModelos");

class SeccionesControladores{
  todos() {
    return new Promise((resolve, reject) => {   
      let promesa= SeccionesModelos.todos();
        if(promesa){
          resolve(promesa);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
    })
  }
  uno(idReq) {
    return new Promise((resolve,reject)=>{
      let promesa= SeccionesModelos.uno(idReq);
        if(promesa){
          resolve(promesa);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }

    })
  }
  crear(usuario){
    return new Promise((resolve, reject) =>{
        let promesa= SeccionesModelos.crear(usuario);
        if(promesa){
          resolve(promesa);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
      
  })
    
  }
  modificar(idReq, nuevoNombre){
    return new Promise((resolve, reject) => {   
      let promesa= SeccionesModelos.modificar(idReq, nuevoNombre);
        if(promesa){
          resolve(promesa);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }
    })

  }
  eliminar(idElemento){
    return new Promise((resolve, reject) =>{
      let promesa= SeccionesModelos.eliminar(idElemento);
        if(promesa){
          resolve(promesa);
        } else {
          reject(new Error("Ha ocurrido un error"));
        }

    })
  }
  }


module.exports = new SeccionesControladores();
