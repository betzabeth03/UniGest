var express = require('express');
var router = express.Router();
var ProfesoresControladores = require("../controllers/ProfesoresControladores");
let MateriasControladores = require("../controllers/MateriasControlador");
const SeccionesControladores = require('../controllers/SeccionesControladores');
const EventosControlador = require('../controllers/EventosControlador');
const ActividadesControladores = require('../controllers/ActividadesControlador')
const RelacionesControladores = require('../controllers/RelacionesControladores')
const conexion = require('../conexion');

/* GET users listing. */
router.get('/actividades', function(req, res, next) {
  ActividadesControladores.todos()
  .then((resultados) =>{
    res.send(resultados); 
  })
  .catch((e) => console.error(e.message));
});

router.get('/profesores', function(req, res, next) {
  if(req.query.id){
    ProfesoresControladores.uno(req.query.id)
    .then((resultado)=>{
      res.render("profesores", {"resultados": resultado});
  })
  .catch((e)=>{console.error(e.message)})
  }else{
    ProfesoresControladores.todos()
    .then((resultados) =>{
      res.render("profesores",{
        "resultados" : resultados
    }); 
    })
    .catch((e) => console.error(e.message));
  }
  })

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
router.post('/actividades', function(req, res, next) {
  ActividadesControladores.crear(req.body)
  .then(() => {
      ActividadesControladores.todos()
      .then((resultados) =>{
      res.send(resultados); 
    })
  })
  .catch((e) => console.error(e.message));
});

router.post('/profesores', function(req, res, next) {
  ProfesoresControladores.crear(req.body)
  .then(() => {
      ProfesoresControladores.todos()
      .then((resultados) =>{
      res.render("profesores",{"resultados": resultados}); 
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
router.put('/actividades/:id', function(req, res, next) {
  const idReq = req.params.id;
  const nuevosValores = req.body;
  ActividadesControladores.modificar(idReq, nuevosValores)
  .then(() => {
    ActividadesControladores.todos()
    .then((resultados) =>{
    res.send(resultados); 
  })
})
    .catch((e) => console.error(e.message));
    });

router.put('/profesores/:id', function(req, res, next) {
  const idReq = req.params.id;
  const nuevosValores = req.body;
  ProfesoresControladores.modificar(idReq, nuevosValores)
  .then(() => {
    ProfesoresControladores.todos()
    .then((resultados) =>{
    res.send(resultados); 
  })
})
    .catch((e) => console.error(e.message));
    });

    router.put('/materias/:id', function(req, res, next) {
      const idReq = req.params.id;
      const nuevosValores = req.body;
      MateriasControladores.modificar(idReq, nuevosValores)
        .then(() => {
          MateriasControladores.todos()
          .then((resultados)=>{
            res.send(resultados)
          })
        })
        .catch((e) => console.error(e.message));
        });

router.put('/secciones/:id', function(req, res, next) {
  const idReq = req.params.id;
  const nuevosValores = req.body;
  SeccionesControladores.modificar(idReq, nuevosValores)
    .then(() => {
      SeccionesControladores.todos()
      .then((results)=>{
        res.send(results)
      })
    })
    .catch((e) => console.error(e.message));
    });

    router.put('/eventos/:id', function(req, res, next) {
      const idReq = req.params.id;
      const nuevosValores = req.body;
      EventosControlador.modificar(idReq, nuevosValores)
        .then(() => {
          EventosControlador.todos()
          .then((results)=>{
            res.send(results)
          })
        })
        .catch((e) => console.error(e.message));
        });
    


/* GET one user  */
router.get("/actividades/:id",function(req,res,next){
  ActividadesControladores.uno(req.params.id)
  .then((resultados)=>{
    res.send(resultados)
  })
  .catch((e) => console.error(e.message));
})

// router.get("/profesores",function(req,res,next){
//   idprof = req.query.id
//   ProfesoresControladores.uno(idprof)
//   .then((resultados)=>{
//     res.render("profesoresUno",{"resultados": resultados});
//   })
//   .catch((e) => console.error(e.message));
// })

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

// DELETE
router.delete("/actividades/:id",function(req,res,next){
  actividadesControladores.eliminar(req.params.id)
    .then(()=>{
      actividadesControladores.todos()
      .then((resultados) =>{
      res.send(resultados);  }
    )})
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
          
      router.get("/profesores-materias",function(req,res,next){
        RelacionesControladores.profesores_materias()
        .then((resultados)=>{
          res.send(resultados)
        }
        
        )
        .catch((e) => console.error(e.message));
      })
      
router.post("/relaciones",function(req,res,next){
  const datos = req.body
  RelacionesControladores.crear(datos)
  .then((resultados)=>{
    res.send(resultados)
  })
  .catch((e)=>{
    console.error(e.message)
  })
})
router.put("/relaciones/:id",function(req,res,next){
  const datos = req.body
  const id = req.params.id
  RelacionesControladores.editar(id,datos)
  .then((results)=>{
    res.send(results)
  })
  .catch((e)=>{
    console.error(e.message)
  })
})
router.get("/profesores-materias-secciones",function(req,res,next){
  RelacionesControladores.profesores_materias_secciones()
  .then((results)=>{
    res.send(results)
  })
  .catch((e)=>{
    console.error(e.message)
  })
})
router.get("/secciones-eventos",function(req,res,next){
  RelacionesControladores.secciones_eventos()
  .then((results)=>{
    res.send(results)
  })
  .catch((e)=>{
    console.error(e.message)
  })
})
router.get("/materias-actividades",function(req,res,next){
  RelacionesControladores.materias_actividades()
  .then((results)=>{
    res.send(results)
  })
  .catch((e)=>{
    console.error(e.message)
  })
})
router.get("/actividades-fecha",function(req,res,next){
  RelacionesControladores.profesores_materias_secciones_actividades()
  .then((results)=>{
    res.send(results)
  })
  .catch((e)=>{
    console.error(e)
  })
})
module.exports = router;
