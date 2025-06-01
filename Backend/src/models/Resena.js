const mongoose = require("mongoose");

const ResenaSchema = new mongoose.Schema({
  nombre: String,
  texto: String,
  estrellas: Number,
  fecha: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Resena", ResenaSchema);
