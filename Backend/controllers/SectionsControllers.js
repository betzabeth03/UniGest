const SectionsModels = require("../models/SectionsModels");

class SectionsControllers{
  All() {
    return new Promise((resolve, reject) => {   
      SectionsModels.All()
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
        SectionsModels.Create(registro)
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
      SectionsModels.Modify(idReq, nuevosValores)
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
      SectionsModels.Delete(idElemento)
      .then(() => {
        resolve()
      })
      .catch((error) => {
        reject(error)
      });
    });
  }
}


module.exports = new SectionsControllers();
