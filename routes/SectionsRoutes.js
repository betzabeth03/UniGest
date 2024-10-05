const express = require("express");
const router = express.Router();
const SectionsControllers = require('../controllers/SectionsControllers')
router.get("/", function (req, res, next) {
      if (req.query.id) {
        SectionsControllers.One(req.query.id)
          .then((result) => {
            res.send(result)
          })
          .catch((e) => {
            res.send(e)  
        });
      } else {
        SectionsControllers.All()
          .then((result) => {
            res.send(result)
          })
          .catch((e) => {
            res.send(e)  
        });
      }
    })
router.post("/agregar", function (req, res, next) {
      SectionsControllers.Create(req.body)
        .then(() => {
          SectionsControllers.All()
          .then((result) => {
            res.send(result)
          });
        })
        .catch((e) => {
    res.send(e)        });
    })
router.put("/editar/:id", function (req, res, next) {
      const idReq = req.params.id;
      const nuevosValores = req.body;
      SectionsControllers.Modify(idReq, nuevosValores)
        .then(() => {
          SectionsControllers.All()
          .then((result) => {
            res.send(result);
          });
        })
        .catch((e) => {
    res.send(e)        });
    })
router.delete("/eliminar/:id", function (req, res, next) {
      SectionsControllers.Delete(req.params.id)
        .then(() => {
          SectionsControllers.All()
          .then((result) => {
            res.send(result);
          });
        })
        .catch((e) => {
    res.send(e)        });
    })
module.exports = router;
