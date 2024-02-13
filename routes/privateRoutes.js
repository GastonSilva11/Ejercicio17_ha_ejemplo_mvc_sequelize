const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const ensureIsAuthenticated = require("../middlewares/ensureIsAuthenticated");
// Rutas relacionadas al panel de control (Admin):
// ...

router.get("/", ensureIsAuthenticated, userController.admin);
router.get("/create", userController.create);

module.exports = router;
