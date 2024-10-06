const PMSModels = require("../models/PMSModels");

class PMSControllers{
    All(){
      return new Promise((resolve, reject) => {   
        PMSModels.All()
       .then((result) => {
        resolve(result)
       }).catch((e) => {
        reject(e)
       });
      })
    }
    One(idReq) {
      return new Promise((resolve,reject)=>{
       PMSModels.One(idReq)
       .then((result) => {
        resolve(result)
       }).catch((e) => {
        reject(e)
       });
      })
    }
    Create(actividad){
      return new Promise((resolve, reject) =>{
        PMSModels.Create(actividad)
        .then((result) => {
          resolve(result)
         }).catch((e) => {
          reject(e)
         })
    })
      
    }
    Modify(idReq, nuevosValores){
      return new Promise((resolve, reject) => {   
      PMSModels.Modify(idReq,nuevosValores)
      .then((result) => {
        resolve(result)
       }).catch((e) => {
        reject(e)
       });
      })
    }
    Delete(idElemento){
      return new Promise((resolve, reject) =>{
      PMSModels.Delete(idElemento)
      .then((result) => {
        resolve(result)
       }).catch((e) => {
        reject(e)
       });
      })
    }
  }
  module.exports = new PMSControllers();