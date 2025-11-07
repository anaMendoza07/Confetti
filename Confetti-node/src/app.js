import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.routes.js";
import productRoutes from "./routes/products.routes.js";
dotenv.config();

const app = express();
app.use(express.json()); // <- importante para leer JSON
app.use("/api/products", productRoutes);
// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("✅ Conectado a MongoDB"))
    .catch(err => console.error("❌ Error al conectar a MongoDB:", err.message));

console.log("📦 Cargando rutas de usuario...");
app.use("/api/users", userRoutes);

// 👉 Aquí se registran las rutas
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`✅ Servidor corriendo en http://localhost:${PORT}`));


//f6JPxeRXaqKeDWBp password admin
