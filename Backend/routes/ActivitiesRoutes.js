const express = require("express");
const router = express.Router();
const ActivitiesControllers = require("../controllers/ActivitiesControllers");
router.get("/", function (req, res, next) {
    ActivitiesControllers.All()
      .then((result) => {
        res.status(200).json({ message: "Peticion exitosa", body: result });
      })
      .catch((e) => {
        res
          .status(500)
          .json({
            message: "Algo no ha salido como se esperaba",
            error: e.message,
          });
      });
  }
);
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
      res
        .status(500)
        .json({
          message: "Algo no ha salido como se esperaba",
          error: e.message,
        });
    });
});
router.put("/editar/:id", function (req, res, next) {
  const idReq = req.params.id;
  const nuevosValores = req.body;
  ActivitiesControllers.Modify(idReq, nuevosValores)
    .then(() => {
      ActivitiesControllers.All().then((result) => {
        res.status(200).json({ message: "Peticion exitosa", body: result });
      });
    })
    .catch((e) => {
      res
        .status(500)
        .json({
          message: "Algo no ha salido como se esperaba",
          error: e.message,
        });
    });
});
router.delete("/eliminar/:id", function (req, res, next) {
  ActivitiesControllers.Delete(req.params.id)
    .then(() => {
      ActivitiesControllers.All().then((result) => {
        res.status(200).json({ message: "Peticion exitosa", body: result });
      });
    })
    .catch((e) => {
      res
        .status(500)
        .json({
          message: "Algo no ha salido como se esperaba",
          error: e.message,
        });
    });
});

module.exports = router;
