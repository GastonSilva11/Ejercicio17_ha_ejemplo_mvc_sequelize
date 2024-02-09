const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");

// Rutas relacionadas a la parte pública del sitio web:
// ...
const index = (req, res) => {
  res.render("home");
};

router.get("/", pagesController.showHome);

module.exports = index;
