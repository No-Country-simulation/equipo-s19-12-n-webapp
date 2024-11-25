import express from "express"
import detalleCSchema from "../models/detalleC.model.js"

const router = express.Router()

router.get("/", async (req, res) => {
    const detalleCs = await detalleCSchema.find();
    res.json(detalleCs);
})

router.get("/:_id", async (req, res) => {
    const detalleC = await detalleCSchema.findById(req.params._id);
    res.json(detalleC);
})

router.post("/", async (req, res) => {
    const {compra, articulo, cantidad} = req.body;
    const nuevoDetalleC = new detalleCSchema({compra, articulo, cantidad});
    await detalleCSchema.insertMany(nuevoDetalleC);
})

router.post("/:_id", async (req, res) => {
    const {compra, articulo, cantidad} = req.body;
    const detalleCActualizado = new detalleCSchema({compra, articulo, cantidad});
    await detalleCSchema.findByIdAndUpdate(req.params._id, detalleCActualizado);
})

router.delete("/:_id", async (req, res) => {
    await detalleCSchema.findByIdAndDelete(req.params._id)
})

router.delete("/", async (req, res) => {
    await detalleCSchema.remove();
})

export default router;