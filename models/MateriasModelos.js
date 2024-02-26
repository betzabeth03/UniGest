const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');
let MateriasArr = [
    {
        nombre:"Matematicas",
        id:"1",

    }
]


class MateriasModelos{
    todos(){
        return MateriasArr
    }
    uno(idReq) {
    
        for(let i=0;i<MateriasArr.length;i++){
          if(idReq==MateriasArr[i].id){
            return MateriasArr[i]
          }
        }
    
      
    }
    crear(usuario){
      return new Promise((resolve, reject) => { {
              usuario.id = uuidv4();
              MateriasArr.push(usuario);
              if(usuario){
                resolve()
              } else {
                reject(new Error("Ha ocurrido un error"));
              }
         }          
      })
    }
   modificar(idReq, nuevoNombre) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < MateriasArr.length; i++) {
        if (idReq === MateriasArr[i].id) {
          MateriasArr[i].nombre = nuevoNombre;
          if(nuevoNombre){
            resolve(MateriasArr[i]);
          } else {
            reject(new Error("Ha ocurrido un error"));
          }
        } 
      }
      ;
    });
  }
    
  eliminar(idElemento){
    for(let i=0;i<MateriasArr.length;i++){
      if(idElemento==MateriasArr[i].id){
        let index = MateriasArr.indexOf(idElemento)
        MateriasArr.splice(index,1);
        return 1
      }
    }
  
  
  }
}
module.exports = new MateriasModelos