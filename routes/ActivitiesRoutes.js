const express = require("express");
const router = express.Router();
const ActivitiesControllers = require("../controllers/ActivitiesControllers");
router.get("/", function (req, res, next) {
      if (req.query.id) {
        ActivitiesControllers.One(req.query.id)
          .then((result) => {
            res.send(result);
          })
          .catch((e) => {
            res.send(e);
          });
      } else {
        ActivitiesControllers.All()
          .then((result) => {
            res.send(result);
          })
          .catch((e) => {
            res.send(e);
          });
      }
    })
router.post("/agregar", function (req, res, next) {
      ActivitiesControllers.Create(req.body)
        .then(() => {
          ActivitiesControllers.All().then((result) => {
            res.render("actividades", {
              result: result,
              direccion: "/tablas/actividades",
            });
          });
        })
        .catch((e) => {
          res.redirect(500, "/tablas", 1);
        });
});
router.put("/editar/:id", function (req, res, next) {
      const idReq = req.params.id;
      const nuevosValores = req.body;
      ActivitiesControllers.Modify(idReq, nuevosValores)
        .then(() => {
          ActivitiesControllers.All().then((result) => {
            res.send(result);
          });
        })
        .catch((e) => {
          res.send(e);
        });
});
router.delete("/eliminar/:id", function (req, res, next) {
      ActivitiesControllers.Delete(req.params.id)
        .then(() => {
          ActivitiesControllers.All().then((result) => {
            res.send(result);
          });
        })
        .catch((e) => {
          res.send(e);
        });
});

module.exports = router;
