var SeccionesModelos = require("../models/SeccionesModelos");

class SeccionesControladores{
  todos() {
    return new Promise((resolve, reject) => {   
      SeccionesModelos.todos()
      .then((results) => {
        resolve(results)
      })
      .catch((error) => {
        reject(error)
      });
    });
  }

  uno(idReq) {
    return new Promise((resolve,reject)=>{
        SeccionesModelos.uno(idReq)
        .then((results) => {
          resolve(results)
      })
      .catch((error) => {
          reject(error)
      });
    });
  }

  crear(registro){
    return new Promise((resolve, reject) =>{
        SeccionesModelos.crear(registro)
        .then(() => {
          resolve()
      })
      .catch((error) => {
          reject(error)
      });
    });
  }

  modificar(idReq, nuevosValores){
    return new Promise((resolve, reject) => {   
      SeccionesModelos.modificar(idReq, nuevosValores)
      .then(() => {
        resolve()
      })
      .catch((error) => {
        reject(error)
      });
    });
  }

  eliminar(idElemento){
    return new Promise((resolve, reject) =>{
      SeccionesModelos.eliminar(idElemento)
      .then(() => {
        resolve()
      })
      .catch((error) => {
        reject(error)
      });
    });
  }
}


module.exports = new SeccionesControladores();
