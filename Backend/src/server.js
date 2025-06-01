// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());


// Rutas

//----------------
const resenaRoutes = require("./routes/resenas");
app.use("/api/resenas", resenaRoutes);

// Conexión a MongoDB
console.log("URI leída:", process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB conectado');
    app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
  })
  .catch((err) => console.error('Error de conexión a MongoDB:', err));
  app.get('/', (req, res) => {
    res.send('Hola mundo!')
})