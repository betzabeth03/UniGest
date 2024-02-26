const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');

let SeccionesArr = [
   {
    Profesor: "Maria",
    materia: 1,
    seccion:2
        
   }
]

class SeccionesModelos{
  todos() {
    return SeccionesArr;
  }
  uno(idReq) {
    
      for(let i=0;i<SeccionesArr.length;i++){
        if(idReq==SeccionesArr[i].id){
          return SeccionesArr[i]
        }
      }
  
    
  }
  crear(usuario){
    return new Promise((resolve, reject) => {
            usuario.id = uuidv4();
            SeccionesArr.push(usuario);
            resolve();
    })
  }
 modificar(idReq, nuevoNombre) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < SeccionesArr.length; i++) {
      if (idReq === SeccionesArr[i].id) {
        SeccionesArr[i].nombre = nuevoNombre;
        resolve(SeccionesArr[i]);
      }
    }
    ;
  });
}
  
eliminar(idElemento){
  for(let i=0;i<SeccionesArr.length;i++){
    if(idElemento==SeccionesArr[i].id){
      let index = SeccionesArr.indexOf(idElemento)
      SeccionesArr.splice(index,1);
      return 1
    }
  }


}
}

module.exports = new SeccionesModelos(); 