import express from "express"
import productoSchema from "../models/producto.model.js"

const router = express.Router()

router.get("/", async (req, res) => {
    const productos = await productoSchema.find();
    res.json(productos);
})

router.get("/:_id", async (req, res) => {
    const producto = await productoSchema.findById(req.params._id);
    res.json(producto);
})

router.post("/", async (req, res) => {
    const {nombre, desc, precio, img} = req.body;
    const nuevoProducto = new productoSchema({nombre, desc, precio, img});
    await productoSchema.insertMany(nuevoProducto);
})

router.post("/:_id", async (req, res) => {
    const {nombre, desc, precio, img} = req.body;
    const productoActualizado = new productoSchema({nombre, desc, precio, img});
    await productoSchema.findByIdAndUpdate(req.params._id, productoActualizado);
})

router.delete("/:_id", async (req, res) => {
    await productoSchema.findByIdAndDelete(req.params._id)
})

router.delete("/", async (req, res) => {
    await productoSchema.remove();
})

export default router;