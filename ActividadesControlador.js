var ActividadModelos = require("../models/ActividadesModelos");

class ActividadesControladores{
    todos(){
      return new Promise((resolve, reject) => { 
        ActividadModelos.todos()
        .then(()=> {
          resolve()
          })
          .catch((error)=> {
           reject(error)
          });
        });
      }

    uno(idReq) {
      return new Promise((resolve, reject) => { 
        ActividadModelos.uno(idReq)
        .then(()=> {
          resolve()
          })
          .catch((error)=> {
           reject(error)
          });
        });
    }

    crear(actividad){
      return new Promise((resolve, reject) => { 
        ActividadModelos.crear(actividad)
        .then(()=> {
          resolve()
          })
          .catch((error)=> {
           reject(error)
          });
        });  
    }

    modificar(idReq, nuevosValores){
      return new Promise((resolve, reject) => { 
        ActividadModelos.modificar(idReq, nuevosValores)
        .then(()=> {
          resolve()
          })
          .catch((error)=> {
           reject(error)
          });
        });
    }

    eliminar(idElemento){
      return new Promise((resolve, reject) => { 
        ActividadModelos.eliminar(idElemento)
        .then(()=> {
          resolve()
          })
          .catch((error)=> {
           reject(error)
          });
        });
    }
  }
  module.exports = new ActividadesControladores();