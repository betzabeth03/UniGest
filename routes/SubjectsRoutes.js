const express = require("express");
const router = express.Router();
const SubjectsControllers = require("../controllers/SubjectsControllers");
router.get("/", function (req, res, next) {
      if (req.query.id) {
        SubjectsControllers.One(req.query.id)
          .then((result) => {
            res.send(result);
          })
          .catch((e) => {
            res.send(e);
          });
      } else {
        SubjectsControllers.All()
          .then((result) => {
            res.send(result);
          })
          .catch((e) => {
            res.send(e);
          });
      }
    })
router.post("/agregar", function (req, res, next) {
      SubjectsControllers.Create(req.body)
        .then(() => {
          SubjectsControllers.All()
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
      SubjectsControllers.Modify(idReq, nuevosValores)
        .then(() => {
          SubjectsControllers.All().then((result) => {
            res.send(result);
          });
        })
        .catch((e) => {
          res.send(e);
        });
    })
router.delete("/eliminar/:id", function (req, res, next) {
      SubjectsControllers.Delete(req.params.id)
        .then(() => {
          SubjectsControllers.All().then((result) => {
            res.send(result);
          });
        })
        .catch((e) => {
          res.send(e);
        });
    })
module.exports = router;
