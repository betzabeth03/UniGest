var EventosModelos = require("../models/EventosModelos")

class EventosControladores{
    todos() {
        return new Promise((resolve, reject) => {   
          EventosModelos.todos()
          .then((results)=> {
            resolve(results)
            })
            .catch((error)=> {
             reject(error)
            });
          });
      }
      
      crear(registro){
        return new Promise((resolve, reject) =>{
           EventosModelos.crear(registro)
           .then(()=> {
            resolve()
            })
            .catch((error)=> {
             reject(error)
            });
          });
        }

    uno(idReq){
        return new Promise((resolve,reject)=>{
          EventosModelos.uno(idReq)
          .then((results)=> {
            resolve(results)
            })
            .catch((error)=> {
             reject(error)
            });
          });
        }


      eliminar(idReq){
        return new Promise((resolve, reject) =>{
           EventosModelos.eliminar(idReq)
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
          EventosModelos.modificar(idReq,nuevosValores )
          .then(()=> {
            resolve()
            })
            .catch((error)=> {
             reject(error)
            });
          });
        }
}

    module.exports = new EventosControladores();