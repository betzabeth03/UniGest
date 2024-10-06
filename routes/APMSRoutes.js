const express = require('express');
const router = express.Router();
const APMSControllers = require('../controllers/APMSControllers');
router.get("/", function (req, res, next) {
    if (req.query.id) {
      APMSControllers.One(req.query.id)
        .then((result) => {
          res.send(result)
        })
        .catch((e) => {
          res.send(e)
        });
    } else {
      APMSControllers.All()
        .then((result) => {
          res.send(result)
        })
     
  } })
 
router.post("/agregar", function (req, res, next) {

    APMSControllers.Create(req.body)
      .then(() => {
        APMSControllers.All()
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
    APMSControllers.Modify(idReq, nuevosValores)
      .then(() => {
        APMSControllers.All()
        .then((result) => {
          res.send(result);
        });
      })
      .catch((e) => {
        res.send(e)
      });
  })
router.delete("/eliminar/:id", function (req, res, next) {
    APMSControllers.Delete(req.params.id)
      .then(() => {
        APMSControllers.All()
        .then((result) => {
          res.send(result);
        });
      })
      .catch((e) => {
        res.send(e);
      });
  })

module.exports = router;


module.exports = router;
