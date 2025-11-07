import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: { type: String, required: true, trim: true },
    descripcion: { type: String, default: "" },
    precio: { type: Number, required: true, min: 0 },
    categoria: { type: String, default: "Sin categoría" },
    stock: { type: Number, default: 0, min: 0 },
    imagen: { type: String, default: "" } // URL o path
}, { timestamps: true });

export default mongoose.model("Product", productSchema);
