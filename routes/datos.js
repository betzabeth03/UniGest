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
const jwt = require('jsonwebtoken')

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
        res.redirect(500,"/tablas",1)

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
        res.redirect(500,"/tablas",1)

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
                  .catch((e) =>{
                    res.redirect(500,"/tablas",1)
                  });
          } else {
              ProfesoresControladores.todos()
                  .then((resultados) => {
                      res.render("profesores", {
                          "resultados": resultados,
                          "direccion": '/tablas/profesores'
                      });
                  })
                  .catch((e) =>{
                    res.redirect(500,"/tablas",1)

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
                         res.redirect(500,"/tablas",1)

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
        res.redirect(500,"/tablas",1)

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
      res.redirect(500,"/tablas",1)

                 })
    }else{
      SeccionesControladores.todos()
      .then((resultados) =>{
        res.render("secciones",{
          "resultados" : resultados,
          "direccion" : '/tablas/secciones'
      }); 
      })
      .catch((e) =>{
        res.redirect(500,"/tablas",1)

      });
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
    .catch((e)=>{
      res.redirect(500,"/tablas",1)

    })
    }else{
      EventosControladores.todos()
      .then((resultados) =>{
        res.render("eventos",{
          "resultados" : resultados,
          "direccion" : '/tablas/eventos'
      }); 
      })
      .catch((e) =>{
        res.redirect(500,"/tablas",1)

      });
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
      res.redirect(500,"/tablas",1)
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
      res.redirect(500,"/tablas",1)
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
      res.redirect(401,"/tablas",1)
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
      res.redirect(401,"/tablas",1)
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
      res.redirect(401,"/tablas",1)
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
    res.redirect(401,"/tablas",1)
  })

  })
  .catch(()=>{
    res.redirect(401,"/tablas/401",1)
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
          res.redirect(401,"/tablas",1)
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
        res.redirect(401,"/tablas",1)
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
          res.redirect(401,"/tablas",1)
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
      res.redirect(500,"/tablas",1)
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
      res.redirect(401,"/tablas",1)
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
        res.redirect(401,"/tablas",1)
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
    res.redirect(401,"/tablas",1)

  })
  .catch(()=>{
    res.redirect(401,"/tablas",1)
  })
   
      })    
          
      router.get("/profesores-materias",function(req,res,next){
        RelacionesControladores.profesores_materias()
        .then((resultados)=>{
          res.render("profesores-materias",{resultados: resultados,direccion:"/tablas/relaciones"})
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
      ProfesoresControladores.todos()
      .then((resultadosProf)=>{
        MateriasControladores.todos()
        .then( (resultadosMat)=> {
          SeccionesControladores.todos()
          .then( (resultadosSec)=>{
            ActividadesControladores.todos()
            .then( (resultadosAct)=>{
              EventosControladores.todos()
              .then((resultadosEve)=>{
                RelacionesControladores.profesores_materias_secciones_actividades()
                .then((results)=>{
                  res.render("relaciones", {
                    resultados: results,
                    direccion : "/tablas/relaciones",
                    resultadosProf:resultadosProf,
                    resultadosMat:resultadosMat,
                    resultadosAct:resultadosAct,
                    resultadosSec:resultadosSec,
                    resultadosEve:resultadosEve
                  })
                })
                .catch((e)=>{
                  console.error(e)
                })
              })
              })
      })})
    })})
    .catch((e)=>{
      res.redirect(500,"/tablas",1)
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
      res.redirect(401,"/tablas",1)
    })

  })
  .catch(()=>{
    res.redirect("/tablas")
  })
  
})
router.get("/profesores-materias-secciones",function(req,res,next){
  RelacionesControladores.profesores_materias_secciones()
  .then((results)=>{
    res.render("profesores-materias-secciones",{resultados: results,direccion:"/tablas/relaciones"})
  })
  .catch((e)=>{
    console.error(e.message)
  })
})
router.get("/secciones-eventos",function(req,res,next){
  RelacionesControladores.secciones_eventos()
  .then((results)=>{
    res.render("secciones-eventos",{resultados: results,direccion:"/tablas/relaciones"})
  })
  .catch((e)=>{
    console.error(e.message)
  })
})
router.get("/materias-actividades",function(req,res,next){
  RelacionesControladores.materias_actividades()
  .then((results)=>{
    res.render("materias-actividades",{resultados: results,direccion:"/tablas/relaciones"})
  })
  .catch((e)=>{
    console.error(e.message)
  })
})
router.get("/relaciones",function(req,res,next){
  ProfesoresControladores.todos()
  .then((resultadosProf)=>{
    MateriasControladores.todos()
    .then( (resultadosMat)=> {
      SeccionesControladores.todos()
      .then( (resultadosSec)=>{
        ActividadesControladores.todos()
        .then( (resultadosAct)=>{
          EventosControladores.todos()
          .then((resultadosEve)=>{
            RelacionesControladores.profesores_materias_secciones_actividades()
            .then((results)=>{
              res.render("relaciones", {
                resultados: results,
                direccion : "/tablas/relaciones",
                resultadosProf:resultadosProf,
                resultadosMat:resultadosMat,
                resultadosAct:resultadosAct,
                resultadosSec:resultadosSec,
                resultadosEve:resultadosEve
              })
            })
            .catch((e)=>{
              console.error(e)
            })
          })
          })
  })})
})})
  

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
  let nombreUser = "Estudiante"
  if(req.cookies.jwt){
    const decodificado = jwt.verify(req.cookies.jwt, process.env.JWT_SECRETO);
    nombreUser = decodificado.nombre
  }
  RelacionesControladores.profesores_materias_secciones_actividades()
  .then((results)=>{
    res.render("tablas", {
      resultados: results,
      direccion : "/tablas/relaciones",
      nombreUser: nombreUser
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
  if(req.cookies.jwt){
    const decodificado = jwt.verify(req.cookies.jwt, process.env.JWT_SECRETO);
    nombreUser = decodificado.nombre 
    }
 Autenticar.registrarse(userDatos)
 .then(()=>{
  
  AutenticacionControlador.login(req.body)
  .then((resultados)=>{
    res.cookie('jwt',resultados)
    RelacionesControladores.profesores_materias_secciones_actividades()
    .then((results)=>{
      req.body = {}
      res.render("tablas", {
        resultados: results,
        direccion : "/tablas/relaciones",
        nombreUser:nombreUser
      }
    )
    })
    .catch(()=>{
      res.redirect(500,"/tablas",1)
    })
  })
  .catch(()=>{
    res.redirect(500,"/tablas",1)
  })
 })
 .catch(()=>{
  res.redirect(500,"/tablas",1)
})
})
router.post("/",function(req,res,next){
  
  if(req.cookies.jwt){
    const decodificado = jwt.verify(req.cookies.jwt, process.env.JWT_SECRETO);
    nombreUser = decodificado.nombre
   }
  AutenticacionControlador.login(req.body)
.then((resultados)=>{
  res.cookie('jwt',resultados)
  RelacionesControladores.profesores_materias_secciones_actividades()
  .then((results)=>{
    res.render("tablas", {
      resultados: results,
      direccion : "/tablas/relaciones",
      nombreUser:nombreUser
    }
  )
  })
  .catch((e)=>{
    res.redirect(500,"/tablas",1)
  })
})
.catch((error)=>{
  res.redirect("/tablas/500")
})
})
router.post("/logout",function(req,res,next){
  AutenticacionControlador.logout(req.cookies.jwt)
  .then(()=>{
    res.clearCookie("jwt")
    res.redirect("/tablas")
  })
  .catch((e)=>{
    res.redirect(500,"/tablas",1)
  })
})
router.get("/401",function(req,res){
  res.render("401")
})
router.get("/500",function(req,res){
  res.render("500")
})
router.delete("/relaciones/:id",function(req,res,next){
  AutenticacionControlador.verificarDirector(req.cookies.jwt)
.then(()=>{
  RelacionesControladores.eliminar(req.params.id)
  .then(()=>{
  location.reload()
})
.catch(()=>{
  res.redirect("/tablas/500")
})
.catch(()=>{
  res.redirect("/tablas/401")
})
 
})}) 
module.exports = router;