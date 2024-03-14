const MateriasModelos = require("../models/MateriasModelos");


class MateriasControladores{
    todos(){
      return new Promise((resolve, reject) => {   
        MateriasModelos.todos()
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
       MateriasModelos.uno(idReq)
       .then(() => {
        resolve()
      })
       .catch((error) => {
        reject(error)
      });
    });
  }

    crear(registro){
      return new Promise((resolve, reject) =>{
        MateriasModelos.crear(registro)
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
        MateriasModelos.modificar(idReq,nuevosValores)
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
        MateriasModelos.eliminar(idElemento)
        .then(() => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        });
    });
  }
}
  module.exports = new MateriasControladores();