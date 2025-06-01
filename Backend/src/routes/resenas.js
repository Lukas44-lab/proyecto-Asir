const express = require("express");
const router = express.Router();
const Resena = require("../models/Resena");

// Obtener todas
router.get("/", async (req, res) => {
  const { orden } = req.query;
  const sort = orden === "puntuacion"
    ? { estrellas: -1 }
    : { fecha: -1 };
  const resenas = await Resena.find().sort(sort);
  res.json(resenas);
});

// Crear nueva
router.post("/", async (req, res) => {
  const nueva = new Resena(req.body);
  await nueva.save();
  res.status(201).json(nueva);
});

module.exports = router;
