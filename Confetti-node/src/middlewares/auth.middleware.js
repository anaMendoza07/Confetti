import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secreto_confetti";

export const verificarToken = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ mensaje: "Token no proporcionado" });

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // guarda info del usuario autenticado
        next();
    } catch (error) {
        res.status(401).json({ mensaje: "Token inválido o expirado" });
    }
};

// Middleware para validar si es admin
export const verificarAdmin = (req, res, next) => {
    if (req.user.rol !== "admin") {
        return res.status(403).json({ mensaje: "Acceso denegado, solo admin" });
    }
    next();
};
