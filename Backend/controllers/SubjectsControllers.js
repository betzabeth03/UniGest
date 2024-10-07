const SubjectsModels = require("../models/SubjectModels");


class SubjectsControllers{
    All(){
      return new Promise((resolve, reject) => {   
        SubjectsModels.All()
        .then((results) => {
          resolve(results)
      })
      .catch((error) => {
          reject(error)
      });
    });
  }

    One(idReq) {
      return new Promise((resolve,reject)=>{ 
       SubjectsModels.One(idReq)
       .then((results) => {
        resolve(results)
      })
       .catch((error) => {
        reject(error)
      });
    });
  }

    Create(registro){
      return new Promise((resolve, reject) =>{
        SubjectsModels.Create(registro)
        .then(() => {
          resolve()
      })
      .catch((error) => {
          reject(error)
      });
    });
  }

    Modify(idReq, nuevosValores){
      return new Promise((resolve, reject) => {   
        SubjectsModels.Modify(idReq,nuevosValores)
        .then(() => {
          resolve()
      })
      .catch((error) => {
          reject(error)
      });
    });
  }

    Delete(idElemento){
      return new Promise((resolve, reject) =>{
        SubjectsModels.Delete(idElemento)
        .then(() => {
          resolve()
        })
        .catch((error) => {
          reject(error)
        });
    });
  }
}
  module.exports = new SubjectsControllers();