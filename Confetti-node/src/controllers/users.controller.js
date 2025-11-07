import User from "../models/User.js";

// Crear usuario
export const crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = new User(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(400).json({ mensaje: "Error al crear usuario", error: error.message });
    }
};

// Listar usuarios
export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find();
        res.json(usuarios);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener usuarios", error: error.message });
    }
};

// Obtener por ID
export const obtenerUsuarioPorId = async (req, res) => {
    try {
        const usuario = await User.findById(req.params.id);
        if (!usuario) return res.status(404).json({ mensaje: "Usuario no encontrado" });
        res.json(usuario);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al obtener usuario", error: error.message });
    }
};

// Actualizar
export const actualizarUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuarioActualizado) return res.status(404).json({ mensaje: "Usuario no encontrado" });
        res.json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ mensaje: "Error al actualizar usuario", error: error.message });
    }
};

// Eliminar
export const eliminarUsuario = async (req, res) => {
    try {
        const usuarioEliminado = await User.findByIdAndDelete(req.params.id);
        if (!usuarioEliminado) return res.status(404).json({ mensaje: "Usuario no encontrado" });
        res.json({ mensaje: "Usuario eliminado correctamente" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar usuario", error: error.message });
    }
};
