import express from "express";
import {
  formularioLogin,
  formularioRegistro,
} from "../controllers/usuarioController";

// Express ua soporta el router y los verbos
// Solo se usa el router porque ya esta definida la instancia en el index
const router = express.Router();

//Routing
//get-> Solo una ruta exacta

// Englobar multiples verbos en una ruta
router.route("/login").get(formularioLogin);
router.route("/registro").get(formularioRegistro);

export default router;
