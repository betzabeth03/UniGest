const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');
const conexion = require('../conexion')


 class EventosModelos{
    todos() {
      return new Promise((resolve,reject)=>{
        let consulta = "SELECT * FROM eventos"
        conexion.query(consulta,function(error,results,fields){
          if(error){
           reject(error)
          }else{
            resolve(results)
          }
        })
      });

      }
      crear(registro){
        return new Promise((resolve, reject) => {
          let nombreR = registro.nombre
          let tipoR = registro.tipo
          let fechaR = registro.fecha
            let consulta = `INSERT INTO eventos (nombre, tipo, fecha, id) VALUES (${nombreR}, ${tipoR}, ${fechaR},""}`
            conexion.query(consulta,function(error,results,fields){
              if(error){
                reject(error)
              }else{
                resolve(results)
    
              }
            })
         })
       }

    
    semana(fecha) {
  var Fechainicial = new Date(fecha['año'], fecha['mes'] , fecha['dia']);
  var Fechafinal = new Date(fecha['año'], fecha['mes'] , fecha['dia'] + 14);

  var eventosProximos = [];

  for (let i = 0; i < EventosArr.length; i++) {
    var FechaEvento = new Date(
      EventosArr[i].fecha['año'],
      EventosArr[i].fecha['mes'],
      EventosArr[i].fecha['dia'],
      EventosArr[i].fecha['hora']
    );
    if (Fechainicial <= FechaEvento && FechaEvento <= Fechafinal) {
      eventosProximos.push(EventosArr[i]);
    }
  }
  return eventosProximos;
}

uno(idReq) {
    
  return new Promise((resolve,reject)=>{
   let consulta = `SELECT  * FROM eventos WHERE id=${idReq}`
   conexion.query(consulta,function(error,results,fields){
     if(error){
       reject(error)
     }else{
       resolve(result)
     }
   })
  })

 
}
    

    
    eliminar(idElemento){
      return new Promise((resolve, reject) => {
          let consulta = `DELETE FROM eventos WHERE id=${idElemento}`
            conexion.query(consulta,function(error,results,fields){
              if(error){
                reject(error)
              }else{
                resolve(results)
  
              }
            })
           })
          }
  
  

    modificar(idReq, nuevosValores) {
      let nombreEv = nuevosValores.nombre
      let tipoEv = nuevosValores.tipoEv
      let fechaEv = nuevosValores.Ev
      let consulta = `UPDATE eventos SET nombre = '${nombreEv}', tipo = ${tipoEv}, fecha = ${fechaEv} WHERE id = ${idReq}`
      conexion.query(consulta,function(error,results,fields){
        if(error){
          reject(error)
        }else{
          resolve(results)
       }
      }
    )}
 }






 module.exports = new EventosModelos(); 