import express from "express"
import compraSchema from "../models/compra.model.js"

const router = express.Router()

router.get("/", async (req, res) => {
    const compras = await compraSchema.find();
    res.json(compras);
})

router.get("/:_id", async (req, res) => {
    const compra = await compraSchema.findById(req.params._id);
    res.json(compra);
})

router.post("/", async (req, res) => {
    const {consumidor, precioT, fecha} = req.body;
    const nuevaCompra = new comercianteSchema({consumidor, comerciante, precioT, fecha});
    await compraSchema.insertMany(nuevaCompra);
})

router.post("/:_id", async (req, res) => {
    const {consumidor, precioT, fecha} = req.body;
    const compraActualizado = new compraSchema({consumidor, comerciante, precioT, fecha});
    await compraSchema.findByIdAndUpdate(req.params._id, compraActualizado);
})

router.delete("/:_id", async (req, res) => {
    await compraSchema.findByIdAndDelete(req.params._id)
})

router.delete("/", async (req, res) => {
    await compraSchema.remove();
})

export default router;