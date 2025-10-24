import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";

// Configurar variables de entorno
dotenv.config();

// Crear la aplicación
const app = express();

//Conexión a la base de datos
connectDB();
// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Ruta principal de prueba
app.get("/", (req, res) => {
    res.send("🚀 Servidor de Confetti-Node funcionando correctamente!");
});

// Puerto desde .env o por defecto 4000
const PORT = process.env.PORT || 4000;

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`✅ Servidor corriendo en http://localhost:${PORT}`);
});

//f6JPxeRXaqKeDWBp password admin
