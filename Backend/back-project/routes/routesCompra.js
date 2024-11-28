import express from "express"
import compraSchema from "../models/compra.model.js"

const routerCompra = express.Router()

routerCompra.get("/", async (req, res) => {
    const compras = await compraSchema.find();
    res.json(compras);
})

routerCompra.get("/:_id", async (req, res) => {
    const compra = await compraSchema.findById(req.params._id);
    res.json(compra);
})

routerCompra.post("/", async (req, res) => {
    const {consumidor, precioT, fecha} = req.body;
    const nuevaCompra = new comercianteSchema({consumidor, comerciante, precioT, fecha});
    await compraSchema.insertMany(nuevaCompra);
})

routerCompra.post("/:_id", async (req, res) => {
    const {consumidor, precioT, fecha} = req.body;
    const compraActualizado = new compraSchema({consumidor, comerciante, precioT, fecha});
    await compraSchema.findByIdAndUpdate(req.params._id, compraActualizado);
})

routerCompra.delete("/:_id", async (req, res) => {
    await compraSchema.findByIdAndDelete(req.params._id)
})

routerCompra.delete("/", async (req, res) => {
    await compraSchema.remove();
})

export default routerCompra;