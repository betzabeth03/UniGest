const { resolveInclude } = require('ejs');
const { v4: uuidv4 } = require ('uuid');

let EventosArr =[
    {
        nombre: "Examen",
        materia:1,
        id: 1,
        fecha:{
            año: 2024,
            mes: 4,
            dia: 25,
            hora: 7
        }
    }
]
 class EventosModelos{
    todos() {
        return EventosArr;
      }
      crear(usuario){
        return new Promise((resolve, reject) => {
                usuario.id = uuidv4();
                EventosArr.push(usuario);
                if(usuario){
                  resolve()
                } else {
                  reject(new Error("Ha ocurrido un error"));
                }})
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
      return new Promise((resolve, reject) => {
        for(let i=0;i<EventosArr.length;i++){
          if(idReq==EventosArr[i].id){
            return EventosArrArr[i]
          }
        }})
    } 
    eliminar(idReq){
      for(let i=0;i<EventosArr.length;i++){
        if(idReq==EventosArr[i].id){
          let index = EventosArr.indexOf(idReq)
          EventosArr.splice(index,1);
          return 1
        }
      }
    } 
     modificar(idReq, nuevoNombre) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < EventosArr.length; i++) {
      if (idReq == EventosArr[i].id) {
        EventosArr[i].nombre = nuevoNombre;
        resolve(EventosArr[i]);
      }
    }
    ;
  });
}
}
 






 module.exports = new EventosModelos(); 