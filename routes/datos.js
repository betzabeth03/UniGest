const express = require('express');
const router = express.Router();
const ProfesoresControladores = require("../controllers/ProfesoresControladores");
const MateriasControladores = require("../controllers/MateriasControlador");
const SeccionesControladores = require('../controllers/SeccionesControladores');
const EventosControladores = require('../controllers/EventosControlador');
const ActividadesControladores = require('../controllers/ActividadesControlador')
const RelacionesControladores = require('../controllers/RelacionesControladores')
const Autenticar = require('../controllers/AutenticacionControlador')
const AutenticacionControlador = require('../controllers/AutenticacionControlador');
const e = require('express');

/* GET users listing. */
router.get('/actividades', function(req, res, next) {
  AutenticacionControlador.verificar(req.cookies.jwt)
  .then(()=>{
    if(req.query.id){
      ActividadesControladores.uno(req.query.id)
      .then((resultado) =>{
        res.render("actividades", {
          "resultados" : resultado,
          "direccion" : '/tablas/actividades'});
      })
      .catch(()=>{
        console.error(e.message) 
        res.redirect("/tablas")
      })
    } else {
      ActividadesControladores.todos()
      .then((resultados) =>{
        res.render("actividades",{
          "resultados": resultados,
          "direccion" : '/tablas/actividades'
        });
      })
      .catch((e) => {
        console.error(e.message) 
        res.redirect("/tablas")
      }  )
    }

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
  
})


router.get('/profesores', function(req, res, next) {
  AutenticacionControlador.verificar(req.cookies.jwt)
      .then(() => {
          if (req.query.id) {
              ProfesoresControladores.uno(req.query.id)
                  .then((resultado) => {
                      res.render("profesores", {
                          "resultados": resultado,
                          "direccion": '/tablas/profesores'
                      });
                  })
                  .catch((e) => console.error(e.message));
          } else {
              ProfesoresControladores.todos()
                  .then((resultados) => {
                      res.render("profesores", {
                          "resultados": resultados,
                          "direccion": '/tablas/profesores'
                      });
                  })
                  .catch((e) =>{
                    console.error(e.message)
                    res.redirect("/tablas")
                   })
          }
      })
      .catch((e) => {
          res.redirect(401,"/tablas",1)
      });
});
  
  


  router.get('/materias', function(req, res, next) {
    AutenticacionControlador.verificar(req.cookies.jwt)
  .then(()=>{
    if(req.query.id){
      MateriasControladores.uno(req.query.id)
      .then((resultado)=>{
        res.render("materias", {
        "resultados": resultado,
        "direccion" : '/tablas/materias'});
    })
      .catch((e) =>{
                    console.error(e.message)
                    res.redirect("/tablas")
                   })
    }else{
      MateriasControladores.todos()
      .then((resultados) =>{
        res.render("materias",{
          "resultados" : resultados,
          "direccion" : '/tablas/materias'
      }); 
      })
      .catch((e) =>{
        console.error(e.message)
        res.redirect("/tablas")
       })
    }

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
    
    })


    router.get('/secciones', function(req, res, next) {
      AutenticacionControlador.verificar(req.cookies.jwt)
  .then(()=>{
    if(req.query.id){
      SeccionesControladores.uno(req.query.id)
      .then((resultado)=>{
        res.render("secciones", {
        "resultados": resultado,
        "direccion" : '/tablas/secciones'});
    })
     .catch((e) =>{
                  console.error(e.message)
                  res.redirect("/tablas")
                 })
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
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
      
      })


      router.get('/eventos', function(req, res, next) {
        AutenticacionControlador.verificar(req.cookies.jwt)
  .then(()=>{
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
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
      
        })






/* POST crear users. */
router.post('/actividades', function(req, res, next) {
  AutenticacionControlador.verificar(req.cookies.jwt)
  .then(()=>{
    ActividadesControladores.crear(req.body)
    .then(() => {
        ActividadesControladores.todos()
        .then((resultados) =>{
        res.render("actividades",{"resultados": resultados, "direccion": '/tablas/actividades'});
      })
    })
    .catch(()=>{
      res.redirect("/tablas")
    })
  })
.catch(()=>{
  res.redirect(401,"/tablas",1)
})
  })
  
  

router.post('/profesores', function(req, res, next) {
  AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    ProfesoresControladores.crear(req.body)
    .then(() => {
        ProfesoresControladores.todos()
        .then((resultados) =>{
        res.render("profesores",{"resultados": resultados, "direccion": '/tablas/profesores'}); 
      })
    })
    .catch(()=>{
      res.redirect("/tablas")
    })

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
  
})

router.post('/materias', function(req, res, next) {
  AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    MateriasControladores.crear(req.body)
    .then(() => {
        MateriasControladores.todos()
        .then((resultados) =>{
        res.render("materias",{"resultados": resultados, "direccion": '/tablas/materias'});
      })
    })
    .catch(()=>{
      res.redirect("/tablas")
    })
  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
  })
  
  

router.post('/secciones', function(req, res, next) {
  AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    SeccionesControladores.crear(req.body)
    .then(() => {
        SeccionesControladores.todos()
        .then((resultados) =>{
        res.render("secciones",{"resultados": resultados, "direccion": '/tablas/secciones'});
      })
    })
    .catch(()=>{
      res.redirect("/tablas")
    })
  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
  
})

router.post('/eventos', function(req, res, next) {
  AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    EventosControladores.crear(req.body)
    .then(() => {
        EventosControladores.todos()
        .then((resultados) =>{
        res.render("eventos",{"resultados": resultados, "direccion": '/tablas/eventos'});
      })
    })
    .catch(()=>{
      res.redirect("/tablas")
    })
  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
  
});

/* PUT modificar user */
router.put('/actividades/:id', function(req, res, next) {
  AutenticacionControlador.verificar(req.cookies.jwt)
  .then(()=>{
    const idReq = req.params.id;
    const nuevosValores = req.body;
    ActividadesControladores.modificar(idReq, nuevosValores)
    .then(() => {
      ActividadesControladores.todos()
      .then((resultados) =>{
      res.send(resultados); 
    })
  })
  .catch(()=>{
    res.redirect("/tablas")
  })
  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
  
    });


router.put('/profesores/:id', function(req, res, next) {
  AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    const idReq = req.params.id;
    const nuevosValores = req.body;
    ProfesoresControladores.modificar(idReq, nuevosValores)
    .then(() => {
      ProfesoresControladores.todos()
      .then((resultados) =>{
      res.send(resultados); 
    })
  })
  .catch(()=>{
    res.redirect("/tablas")
  })

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
  
    });


router.put('/materias/:id', function(req, res, next) {
  AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    const idReq = req.params.id;
    const nuevosValores = req.body;
     MateriasControladores.modificar(idReq, nuevosValores)
       .then(() => {
           MateriasControladores.todos()
           .then((resultados)=>{
             res.send(resultados)
           })
         })
         .catch(()=>{
          res.redirect("/tablas")
        })

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
   
        });


router.put('/secciones/:id', function(req, res, next) {
  AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    const idReq = req.params.id;
    const nuevosValores = req.body;
    SeccionesControladores.modificar(idReq, nuevosValores)
      .then(() => {
        SeccionesControladores.todos()
        .then((results)=>{
          res.send(results)
        })
      })
      .catch(()=>{
        res.redirect("/tablas")
      })

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
  
    });

router.put('/eventos/:id', function(req, res, next) {
  AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    const idReq = req.params.id;
    const nuevosValores = req.body;
    EventosControladores.modificar(idReq, nuevosValores)
      .then(() => {
        EventosControladores.todos()
         .then((results)=>{
           res.send(results)
           })
         })
         .catch(()=>{
          res.redirect("/tablas")
        })

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
   
        });
    


// DELETE
router.delete("/actividades/:id",function(req,res,next){
  AutenticacionControlador.verificar(req.cookies.jwt)
  .then(()=>{
    ActividadesControladores.eliminar(req.params.id)
    .then(()=>{
      ActividadesControladores.todos()
      .then((resultados) =>{
      res.send(resultados);  }
    )})
      .catch(()=>{
    res.redirect("/tablas")
  })
    })
    .catch(()=>{
      res.redirect(401,"/tablas",1)
    })
  })
  
  
  

router.delete("/profesores/:id",function(req,res,next){
  AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    ProfesoresControladores.eliminar(req.params.id)
    .then(()=>{
      ProfesoresControladores.todos()
      .then((resultados) =>{
      res.send(resultados);  }
    )})
    .catch(()=>{
      res.redirect("/tablas")
    })

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })

  })

  router.delete("/materias/:id",function(req,res,next){
    AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    MateriasControladores.eliminar(req.params.id)
    .then(()=>{
      MateriasControladores.todos()
      .then((resultados) =>{
      res.send(resultados);  }
    )})
    .catch(()=>{
      res.redirect("/tablas")
    })

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
    
      })
      
      router.delete("/secciones/:id",function(req,res,next){
        AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    SeccionesControladores.eliminar(req.params.id)
    .then(()=>{
     SeccionesControladores.todos()
      .then((resultados) =>{
      res.send(resultados);  }
    )})
      .catch(()=>{
        res.redirect("/tablas")
      })

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
        
          })

  router.delete("/eventos/:id",function(req,res,next){
    AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    EventosControladores.eliminar(req.params.id)
    .then(()=>{
      EventosControladores.todos()
      .then((resultados) =>{
      res.send(resultados);  }
    )})
    .catch((e) => console.error(e.message));

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
   
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
  AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
    const datos = req.body
    RelacionesControladores.crear(datos)
    .then(()=>{
      RelacionesControladores.profesores_materias_secciones_actividades()
      .then((resultados)=>{
        res.render("relaciones",{resultados : resultados, direccion: "/tablas/relaciones"})
      })
      .catch((e)=>{ console.error(e)})
    })
    .catch((e)=>{
      console.error(e.message)
    })

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
  
})
router.put("/relaciones/:id",function(req,res,next){
  AutenticacionControlador.verificarDirector(req.cookies.jwt)
  .then(()=>{
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
  .catch(()=>{
    res.redirect("/tablas")
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
router.get("/relaciones",function(req,res,next){
  RelacionesControladores.profesores_materias_secciones_actividades()
  .then((results)=>{
    res.render("relaciones", {
      resultados: results,
      direccion : "/tablas/relaciones"
    });
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
router.get("/editarRelaciones/:id",function(req,res,next){
  res.render("editarRelaciones",{id:req.params.id, direccion : "/tablas/relaciones"});
})
router.get("/",function(req,res,next){
  RelacionesControladores.profesores_materias_secciones_actividades()
  .then((results)=>{
    res.render("tablas", {
      resultados: results,
      direccion : "/tablas/relaciones",
      fallo : null
    });
  })
  .catch((e)=>{
    console.error(e)
  })
})
router.get("/registrarse",function(req,res,next){
  res.render("registrarse",{direccion: "/tablas/relaciones"})
})
router.post("/registrarse",function(req,res,next){
  const userDatos = req.body
 Autenticar.registrarse(userDatos)
 .then((resultados)=>{
  console.log(resultados)
  res.render("tablas",{direccion: "/tablas/relaciones"})
 })
 .catch((e)=>{
  console.error(e)
 })
})
router.post("/",function(req,res,next){
  AutenticacionControlador.login(req.body)
.then((resultados)=>{
  res.cookie('jwt',resultados)
  RelacionesControladores.profesores_materias_secciones_actividades()
  .then((results)=>{
    res.render("tablas", {
      resultados: results,
      direccion : "/tablas/relaciones"
    }
  )
  })
  .catch((e)=>{
    console.error(e)
  })
})
.catch((error)=>{
  console.log(error)
})
})
router.post("/logout",function(req,res,next){
  AutenticacionControlador.logout(req.cookies.jwt)
  .then(()=>{
    res.clearCookie("jwt")
    res.redirect("/tablas")
  })
  .catch((e)=>{
    console.error(e)
    res.redirect("/tablas")
  })
})
router.get("/401",function(req,res){
  res.render("401")
})

module.exports = router;
