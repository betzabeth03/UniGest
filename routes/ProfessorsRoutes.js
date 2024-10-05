const express = require('express');
const router = express.Router();
const ProfessorsControllers = require("../controllers/ProfessorsControllers");
router.get("/", function (req, res, next) {
      if (req.query.id) {
        ProfessorsControllers.One(req.query.id)
          .then((result) => {
            res.send(result)
          })
          .catch((e) => {
            res.send(e)
          });
      } else {
        ProfessorsControllers.All()
          .then((result) => {
            res.send(result)
          })
       
    } })
   
router.post("/agregar", function (req, res, next) {

      ProfessorsControllers.Create(req.body)
        .then(() => {
          ProfessorsControllers.All()
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
      ProfessorsControllers.Modify(idReq, nuevosValores)
        .then(() => {
          ProfessorsControllers.All()
          .then((result) => {
            res.send(result);
          });
        })
        .catch((e) => {
          res.send(e)
        });
    })
router.delete("/eliminar/:id", function (req, res, next) {
      ProfessorsControllers.Delete(req.params.id)
        .then(() => {
          ProfessorsControllers.All()
          .then((result) => {
            res.send(result);
          });
        })
        .catch((e) => {
          res.send(e);
        });
    })
module.exports = router;
