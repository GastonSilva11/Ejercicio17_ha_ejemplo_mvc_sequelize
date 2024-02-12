const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/", userController.admin);
router.get("/create", userController.create);

module.exports = router;
