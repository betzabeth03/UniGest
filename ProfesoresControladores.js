var ProfesoresModelos = require("../models/ProfesoresModelos");

class ProfesoresControladores{
  todos() {
    return new Promise((resolve, reject) => {   
     ProfesoresModelos.todos()
     .then(() => {
      resolve()
      })
        .catch((error) => {
         reject(error)
      });
    });
  }

  uno(idReq) {
    return new Promise((resolve,reject)=>{
        ProfesoresModelos.uno(idReq)
        .then(() => {
          resolve()
      })
      .catch((error) => {
          reject(error)
      });
    });  
  }

  crear(usuario){
    return new Promise((resolve, reject) =>{
        ProfesoresModelos.crear(usuario)
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
      ProfesoresModelos.modificar(idReq,nuevosValores)
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
      ProfesoresModelos.eliminar(idElemento)
      .then(() => {
        resolve()
      })
      .catch((error) => {
        reject(error)
      });
    });
  }
}


module.exports = new ProfesoresControladores();
