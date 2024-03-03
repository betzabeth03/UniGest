var EventosModelos = require("../models/EventosModelos")

class EventosControladores{
    todos() {
        return new Promise((resolve, reject) => {   
          resolve(EventosModelos.todos());
        })
      }
      crear(usuario){
        return new Promise((resolve, reject) =>{
          //resolve(EventosModelos.crear(usuario));
          let prueba= EventosModelos.crear(usuario);
          if(prueba){
            resolve(prueba);
          } else {
            reject(new Error("Ha ocurrido un error"));
          }
          
      })
        
      }

      semana(fecha){
        return new Promise((resolve, reject) => {
          let prueba = EventosModelos.semana(fecha);
          if(prueba){
            resolve(prueba);
          } else {
            reject(new Error("Ha ocurrido un error"));
          }
        }) 
      }
    uno(idReq){
        return new Promise((resolve,reject)=>{
          resolve(EventosModelos.uno(idReq))  
    
        })
      }
      eliminar(idReq){
        return new Promise((resolve, reject) =>{
          //resolve(EventosModelos.eliminar(idElemento));
          let prueba= EventosModelos.eliminar(idReq);
          if(prueba){
            resolve(prueba);
          } else {
            reject(new Error("Ha ocurrido un error"));
          }
    
        })
      }
      modificar(idReq, nuevosValores){
        return new Promise((resolve, reject) => {   
          let promesa = EventosModelos.modificar(idReq,nuevosValores );
            if(promesa){
              resolve(promesa);
            } else {
              reject(new Error("Ha ocurrido un error"));
            }
        })
    
      }
      
    }

    module.exports = new EventosControladores();