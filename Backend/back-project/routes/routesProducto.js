import express from "express"
import productoSchema from "../models/producto.model.js"

const routerProducto = express.Router()

routerProducto.get("/", async (req, res) => {
    const productos = await productoSchema.find();
    res.json(productos);
})

routerProducto.get("/:_id", async (req, res) => {
    const producto = await productoSchema.findById(req.params._id);
    res.json(producto);
})

routerProducto.post("/", async (req, res) => {
    const {nombre, desc, precio, img} = req.body;
    const nuevoProducto = new productoSchema({nombre, desc, precio, stock, img, comerciante});
    await productoSchema.insertMany(nuevoProducto);
})

routerProducto.post("/:_id", async (req, res) => {
    const {nombre, desc, precio, img} = req.body;
    const productoActualizado = new productoSchema({nombre, desc, precio, stock, img, comerciante});
    await productoSchema.findByIdAndUpdate(req.params._id, productoActualizado);
})

routerProducto.delete("/:_id", async (req, res) => {
    await productoSchema.findByIdAndDelete(req.params._id)
})

routerProducto.delete("/", async (req, res) => {
    await productoSchema.remove();
})

export default routerProducto;