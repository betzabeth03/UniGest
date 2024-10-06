const express = require('express');
const PMSControllers = require('../controllers/PMSControllers');
const router = express.Router();
router.get("/", function (req, res, next) {
    if (req.query.id) {
      PMSControllers.One(req.query.id)
        .then((result) => {
          res.send(result)
        })
        .catch((e) => {
          res.send(e)
        });
    } else {
      PMSControllers.All()
        .then((result) => {
          res.send(result)
        })
     
  } })
 
router.post("/agregar", function (req, res, next) {

    PMSControllers.Create(req.body)
      .then(() => {
        PMSControllers.All()
        .then((result) => {
          res.send(result)
        });
      })
      .catch((e) => {
        res.send(e);
      });
  })


router.put("/editar/:id", function (req, res, next) {
    const idReq = req.params.id;
    const nuevosValores = req.body;
    PMSControllers.Modify(idReq, nuevosValores)
      .then(() => {
        PMSControllers.All()
        .then((result) => {
          res.send(result);
        });
      })
      .catch((e) => {
        res.send(e)
      });
  })
router.delete("/eliminar/:id", function (req, res, next) {
    PMSControllers.Delete(req.params.id)
      .then(() => {
        PMSControllers.All()
        .then((result) => {
          res.send(result);
        });
      })
      .catch((e) => {
        res.send(e);
      });
  })

module.exports = router;
