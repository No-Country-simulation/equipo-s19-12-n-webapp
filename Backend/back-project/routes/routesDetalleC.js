import express from "express"
import detalleCSchema from "../models/detalleC.model.js"

const routerDetalleC = express.Router()

routerDetalleC.get("/", async (req, res) => {
    const detalleCs = await detalleCSchema.find();
    res.json(detalleCs);
})

routerDetalleC.get("/:_id", async (req, res) => {
    const detalleC = await detalleCSchema.findById(req.params._id);
    res.json(detalleC);
})

routerDetalleC.post("/", async (req, res) => {
    const {compra, articulo, cantidad} = req.body;
    const nuevoDetalleC = new detalleCSchema({compra, articulo, cantidad});
    await detalleCSchema.insertMany(nuevoDetalleC);
})

routerDetalleC.post("/:_id", async (req, res) => {
    const {compra, articulo, cantidad} = req.body;
    const detalleCActualizado = new detalleCSchema({compra, articulo, cantidad});
    await detalleCSchema.findByIdAndUpdate(req.params._id, detalleCActualizado);
})

routerDetalleC.delete("/:_id", async (req, res) => {
    await detalleCSchema.findByIdAndDelete(req.params._id)
})

routerDetalleC.delete("/", async (req, res) => {
    await detalleCSchema.remove();
})

export default routerDetalleC;