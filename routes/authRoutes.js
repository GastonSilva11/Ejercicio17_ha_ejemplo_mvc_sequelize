const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

// Rutas relacionadas a la parte pública del sitio web:
// ...

router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.get("/registro", authController.showRegister);
router.post("/registro", authController.create);

module.exports = router;
