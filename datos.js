var express = require('express');
var router = express.Router();
var ProfesoresControladores = require("../controllers/ProfesoresControladores");
let MateriasControladores = require("../controllers/MateriasControlador");
const SeccionesControladores = require('../controllers/SeccionesControladores');
const EventosControladores = require('../controllers/EventosControlador');
const ActividadesControladores = require('../controllers/ActividadesControlador')
const RelacionesControladores = require('../controllers/RelacionesControladores')
const conexion = require('../conexion');

/* GET users listing. */
router.get('/actividades', function(req, res, next) {
  if(req.query.id){
    ActividadesControladores.uno(req.query.id)
    .then((resultado) =>{
      res.render("actividades", {
        "resultados" : resultado,
        "direccion" : '/tablas/actividades',
        "cantidadValores" : 3 });
    })
    .catch((e)=>{console.error(e.message)})
  } else {
    ActividadesModelos.todos()
    .then((resultados) =>{
      res.render("actividades",{
        "resultados": resultados,
        "direccion" : '/tablas/actividades'
      });
    })
    .catch((e) => console.error(e.message))
  }
})


router.get('/profesores', function(req, res, next) {
  if(req.query.id){
    ProfesoresControladores.uno(req.query.id)
    .then((resultado)=>{
      res.render("profesores", {
      "resultados": resultado,
      "direccion" : '/tablas/profesores',
      "cantidadValores" : 2});
  })
  .catch((e)=>{console.error(e.message)})
  }else{
    ProfesoresControladores.todos()
    .then((resultados) =>{
      res.render("profesores",{
        "resultados" : resultados,
        "direccion" : '/tablas/profesores'
    }); 
    })
    .catch((e) => console.error(e.message));
  }
  })


  router.get('/materias', function(req, res, next) {
    if(req.query.id){
      MateriasControladores.uno(req.query.id)
      .then((resultado)=>{
        res.render("materias", {
        "resultados": resultado,
        "direccion" : '/tablas/materias',
        "cantidadValores" : 1});
    })
    .catch((e)=>{console.error(e.message)})
    }else{
      MateriasControladores.todos()
      .then((resultados) =>{
        res.render("materias",{
          "resultados" : resultados,
          "direccion" : '/tablas/materias'
      }); 
      })
      .catch((e) => console.error(e.message));
    }
    })


    router.get('/secciones', function(req, res, next) {
      if(req.query.id){
        SeccionesControladores.uno(req.query.id)
        .then((resultado)=>{
          res.render("secciones", {
          "resultados": resultado,
          "direccion" : '/tablas/secciones',
          "cantidadValores" : 2});
      })
      .catch((e)=>{console.error(e.message)})
      }else{
        SeccionesControladores.todos()
        .then((resultados) =>{
          res.render("secciones",{
            "resultados" : resultados,
            "direccion" : '/tablas/secciones'
        }); 
        })
        .catch((e) => console.error(e.message));
      }
      })


      router.get('/eventos', function(req, res, next) {
        if(req.query.id){
          EventosControladores.uno(req.query.id)
          .then((resultado)=>{
            res.render("eventos", {
            "resultados": resultado,
            "direccion" : '/tablas/eventos',
            "cantidadValores" : 3});
        })
        .catch((e)=>{console.error(e.message)})
        }else{
          EventosControladores.todos()
          .then((resultados) =>{
            res.render("eventos",{
              "resultados" : resultados,
              "direccion" : '/tablas/eventos'
          }); 
          })
          .catch((e) => console.error(e.message));
        }
        })






/* POST crear users. */
router.post('/actividades', function(req, res, next) {
  ActividadesControladores.crear(req.body)
  .then(() => {
      ActividadesControladores.todos()
      .then((resultados) =>{
      res.render("actividades",{"resultados": resultados, "direccion": '/tablas/actividades'});
    })
  })
  .catch((e) => console.error(e.message));
});

router.post('/profesores', function(req, res, next) {
  ProfesoresControladores.crear(req.body)
  .then(() => {
      ProfesoresControladores.todos()
      .then((resultados) =>{
      res.render("profesores",{"resultados": resultados, "direccion": '/tablas/profesores'}); 
    })
  })
  .catch((e) => console.error(e.message));
});

router.post('/materias', function(req, res, next) {
  MateriasControladores.crear(req.body)
  .then(() => {
      MateriasControladores.todos()
      .then((resultados) =>{
      res.render("materias",{"resultados": resultados, "direccion": '/tablas/materias'});
    })
  })
  .catch((e) => console.error(e.message));
});

router.post('/secciones', function(req, res, next) {
  SeccionesControladores.crear(req.body)
  .then(() => {
      SeccionesControladores.todos()
      .then((resultados) =>{
      res.render("secciones",{"resultados": resultados, "direccion": '/tablas/secciones'});
    })
  })
  .catch((e) => console.error(e.message));
});

router.post('/eventos', function(req, res, next) {
  EventosControladores.crear(req.body)
  .then(() => {
      EventosControladores.todos()
      .then((resultados) =>{
      res.render("eventos",{"resultados": resultados, "direccion": '/tablas/eventos'});
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
   EventosControladores.modificar(idReq, nuevosValores)
     .then(() => {
       EventosControladores.todos()
        .then((results)=>{
          res.send(results)
          })
        })
        .catch((e) => console.error(e.message));
        });
    


// DELETE
router.delete("/actividades/:id",function(req,res,next){
  ActividadesControladores.eliminar(req.params.id)
    .then(()=>{
      ActividadesControladores.todos()
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
    EventosControladores.eliminar(req.params.id)
      .then(()=>{
        EventosControladores.todos()
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

//Editar 
router.get("/editarProfesores/:id",function(req,res,next){
  res.render("editarProfesores",{id:req.params.id, direccion : "/tablas/profesores"});
})

router.get("/editarActividades/:id",function(req,res,next){
  res.render("editarActividades",{id:req.params.id, direccion : "/tablas/actividades"});
})

router.get("/editarSecciones/:id",function(req,res,next){
  res.render("editarSecciones",{id:req.params.id, direccion : "/tablas/secciones"});
})

router.get("/editarMaterias/:id",function(req,res,next){
  res.render("editarMaterias",{id:req.params.id, direccion : "/tablas/materias"});
})

router.get("/editarEventos/:id",function(req,res,next){
  res.render("editarEventos",{id:req.params.id, direccion : "/tablas/eventos"});
})

router.get("/",function(req,res,next){
  res.render("tablas",{direccion: "/tablas/relaciones"})
})
module.exports = router;
