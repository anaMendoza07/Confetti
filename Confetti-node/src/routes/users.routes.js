import express from "express";
import { crearUsuario, obtenerUsuarios, obtenerUsuarioPorId, actualizarUsuario, eliminarUsuario } from "../controllers/users.controller.js";

const router = express.Router();

// Rutas CRUD
router.post("/", crearUsuario);            // Crear usuario
router.get("/", obtenerUsuarios);          // Listar usuarios
router.get("/:id", obtenerUsuarioPorId);   // Obtener usuario por ID
router.put("/:id", actualizarUsuario);     // Actualizar usuario
router.delete("/:id", eliminarUsuario);    // Eliminar usuario

export default router;
