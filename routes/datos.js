var express = require('express');
var router = express.Router();
var ProfesoresControladores = require("../controllers/ProfesoresControladores");
let MateriasControladores = require("../controllers/MateriasControlador");
const SeccionesControladores = require('../controllers/SeccionesControladores');
const EventosControlador = require('../controllers/EventosControlador');

/* GET users listing. */
router.get('/profesores', function(req, res, next) {
  ProfesoresControladores.todos()
  .then((resultados) =>{
    res.send(resultados); 
  })
  .catch((e) => console.error(e.message));
});

router.get('/materias', function(req, res, next) {
   MateriasControladores.todos()
   .then((resultados) =>{
     res.send(resultados); 
   })
   .catch((e) => console.error(e.message));
 });
 router.get('/secciones', function(req, res, next) {
  SeccionesControladores.todos()
  .then((resultados) =>{
    res.send(resultados); 
  })
  .catch((e) => console.error(e.message));
});
//obtener todos los eventos//
router.get('/eventos', function(req, res, next) {
  EventosControlador.todos()
  .then((resultados) =>{
    res.send(resultados); 
  })
  .catch((e) => console.error(e.message));
});
//obtener eventos proximos//
router.post('/eventos/proximos', (req, res, next) => {
  const fecha = {
    año: req.body.año,
    mes: req.body.mes,
    dia: req.body.día,
    hora: req.body.hora,
  };
  EventosControlador.semana(fecha)
    .then((eventosProximos) => {
      res.status(200).json(eventosProximos);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});
/* POST crear users. */
router.post('/profesores', function(req, res, next) {
  ProfesoresControladores.crear(req.body)
  .then(() => {
      ProfesoresControladores.todos()
      .then((resultados) =>{
      res.send(resultados); 
    })
  })
  .catch((e) => console.error(e.message));
});

router.post('/materias', function(req, res, next) {
  MateriasControladores.crear(req.body)
  .then(() => {
      MateriasControladores.todos()
      .then((resultados) =>{
      res.send(resultados); 
    })
  })
  .catch((e) => console.error(e.message));
});
router.post('/secciones', function(req, res, next) {
  SeccionesControladores.crear(req.body)
  .then(() => {
      SeccionesControladores.todos()
      .then((resultados) =>{
      res.send(resultados); 
    })
  })
  .catch((e) => console.error(e.message));
});
router.post('/eventos', function(req, res, next) {
  EventosControlador.crear(req.body)
  .then(() => {
      EventosControlador.todos()
      .then((resultados) =>{
      res.send(resultados); 
    })
  })
  .catch((e) => console.error(e.message));
});

/* PUT modificar user */
router.put('/profesores/:id', function(req, res, next) {
  const idReq = req.params.id;
  const nuevoNombre = req.body.nombre;
  ProfesoresControladores.modificar(idReq, nuevoNombre)
    .then((usuarioActualizado) => {
      res.send(usuarioActualizado);
    })
    .catch((e) => console.error(e.message));
    });

    router.put('/materias/:id', function(req, res, next) {
      const idReq = req.params.id;
      const nuevoNombre = req.body.nombre;
      MateriasControladores.modificar(idReq, nuevoNombre)
        .then((usuarioActualizado) => {
          res.send(usuarioActualizado);
        })
        .catch((e) => console.error(e.message));
        });

router.put('/secciones/:id', function(req, res, next) {
  const idReq = req.params.id;
  const nuevoNombre = req.body.nombre;
  SeccionesControladores.modificar(idReq, nuevoNombre)
    .then((usuarioActualizado) => {
      res.send(usuarioActualizado);
    })
    .catch((e) => console.error(e.message));
    });

    router.put('/eventos/:id', function(req, res, next) {
      const idReq = req.params.id;
      const nuevoNombre = req.body.nombre;
      EventosControlador.modificar(idReq, nuevoNombre)
        .then((usuarioActualizado) => {
          res.send(usuarioActualizado);
        })
        .catch((e) => console.error(e.message));
        });
    


/* GET one user  */
router.get("/profesores/:id",function(req,res,next){
  ProfesoresControladores.uno(req.params.id)
  .then((resultados)=>{
    res.send(resultados)
  })
  .catch((e) => console.error(e.message));
})

router.get("/materias/:id",function(req,res,next){
  MateriasControladores.uno(req.params.id)
  .then((resultados)=>{
    res.send(resultados)
  })
  .catch((e) => console.error(e.message));
})
router.get("/secciones/:id",function(req,res,next){
  SeccionesControladores.uno(req.params.id)
  .then((resultados)=>{
    res.send(resultados)
  })
  .catch((e) => console.error(e.message));
})
router.delete("/profesores/:id",function(req,res,next){
ProfesoresControladores.eliminar(req.params.id)
  .then(()=>{
    ProfesoresControladores.todos()
    .then((resultados) =>{
    res.send(resultados);  }
  )})
    .catch((e) => console.error(e.message));
  })

  router.delete("/materias/:id",function(req,res,next){
    MateriasControladores.eliminar(req.params.id)
      .then(()=>{
        MateriasControladores.todos()
        .then((resultados) =>{
        res.send(resultados);  }
      )})
      .catch((e) => console.error(e.message));
      })
      router.delete("/secciones/:id",function(req,res,next){
        SeccionesControladores.eliminar(req.params.id)
          .then(()=>{
           SeccionesControladores.todos()
            .then((resultados) =>{
            res.send(resultados);  }
          )})
            .catch((e) => console.error(e.message));
          })
  router.delete("/eventos/:id",function(req,res,next){
    EventosControlador.eliminar(req.params.id)
      .then(()=>{
        EventosControlador.todos()
        .then((resultados) =>{
        res.send(resultados);  }
      )})
      .catch((e) => console.error(e.message));
      })    
          
      router.get("/profesores-materias/:id",function(req,res,next){
        ProfesoresControladores.materiasAsociadasUno(req.params.id)
        .then((resultados)=>{
          res.send(resultados)
        })
        .catch((e) => console.error(e.message));
      })
      router.get("/profesores-materias",function(req,res,next){
        ProfesoresControladores.materiasAsociadasTodos()
        .then((resultados)=>{
          res.send(resultados)
        }
        
        )
        .catch((e) => console.error(e.message));
      })
      router.delete("/profesores-materias",function(req,res,next){
        const idProf= req.query.idProf
        const idMateria = req.query.idMateria
        ProfesoresControladores.eliminarRelacion(idProf,idMateria)
          .then(()=>{
            ProfesoresControladores.todos()
            .then((resultados) =>{
            res.send(resultados);  }
          )})
          .catch((e) => console.error(e.message));
          })

module.exports = router;
