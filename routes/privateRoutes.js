const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/", userController.admin);
router.get("/editar", userController.edit);

module.exports = router;
