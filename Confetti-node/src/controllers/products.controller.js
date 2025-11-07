import Product from "../models/Product.js";

// Crear producto
export const createProduct = async (req, res) => {
    try {
        const product = new Product(req.body);
        const saved = await product.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ message: "Error creando producto", error: err.message });
    }
};

// Listar productos (con paginación y búsqueda por nombre/categoría opcional)
export const listProducts = async (req, res) => {
    try {
        const { page = 1, limit = 10, q, categoria } = req.query;
        const filter = {};
        if (q) filter.nombre = { $regex: q, $options: "i" };
        if (categoria) filter.categoria = categoria;

        const skip = (Math.max(parseInt(page, 10), 1) - 1) * parseInt(limit, 10);
        const [items, total] = await Promise.all([
            Product.find(filter).skip(skip).limit(parseInt(limit, 10)),
            Product.countDocuments(filter)
        ]);

        res.json({ page: parseInt(page,10), limit: parseInt(limit,10), total, items });
    } catch (err) {
        res.status(500).json({ message: "Error listando productos", error: err.message });
    }
};

// Obtener producto por ID
export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Producto no encontrado" });
        res.json(product);
    } catch (err) {
        res.status(400).json({ message: "ID inválido", error: err.message });
    }
};

// Actualizar producto
export const updateProduct = async (req, res) => {
    try {
        const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Producto no encontrado" });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ message: "Error al actualizar producto", error: err.message });
    }
};

// Eliminar producto
export const deleteProduct = async (req, res) => {
    try {
        const removed = await Product.findByIdAndDelete(req.params.id);
        if (!removed) return res.status(404).json({ message: "Producto no encontrado" });
        res.json({ message: "Producto eliminado" });
    } catch (err) {
        res.status(400).json({ message: "Error al eliminar producto", error: err.message });
    }
};
