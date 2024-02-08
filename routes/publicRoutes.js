const express = require("express");
const router = express.Router();

// Rutas relacionadas a la parte pública del sitio web:
// ...
const index = (req, res) => {
  res.render("home");
};

module.exports = index;
