import express from "express";
import { crearUsuario, obtenerUsuarios, obtenerUsuarioPorId, actualizarUsuario, eliminarUsuario } from "../controllers/users.controller.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../models/User.js";

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || "secreto_confetti"; // pon un valor real en .env

// Rutas CRUD
router.post("/", crearUsuario);            // Crear usuario
router.get("/", obtenerUsuarios);          // Listar usuarios
router.get("/:id", obtenerUsuarioPorId);   // Obtener usuario por ID
router.put("/:id", actualizarUsuario);     // Actualizar usuario
router.delete("/:id", eliminarUsuario);    // Eliminar usuario

// 🔐 LOGIN
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        // Buscar usuario por email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ mensaje: "Usuario no encontrado" });

        // Comparar contraseñas
        const esValida = await user.compararPassword(password);
        if (!esValida) return res.status(400).json({ mensaje: "Contraseña incorrecta" });

        // Crear token JWT
        const token = jwt.sign(
            { id: user._id, rol: user.rol },
            JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.json({
            mensaje: "Login exitoso",
            token
        });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al hacer login", error: error.message });
    }
});
export default router;
