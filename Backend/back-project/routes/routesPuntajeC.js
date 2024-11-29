import express from "express"
import puntajeCSchema from "../models/puntajeC.model.js"

const routerPuntajeC = express.Router()

routerPuntajeC.get("/", async (req, res) => {
    const puntajesC = await puntajeCSchema.find();
    res.json(puntajesC);
})

routerPuntajeC.get("/:_id", async (req, res) => {
    const puntajeC = await puntajeCSchema.findById(req.params._id);
    res.json(puntajeC);
})

routerPuntajeC.post("/", async (req, res) => {
    const {comerciante, consumidor, puntaje} = req.body;
    const nuevoPuntajeC = new puntajeCSchema({comerciante, consumidor, puntaje});
    await puntajeCSchema.insertMany(nuevoPuntajeC);
})

routerPuntajeC.post("/:_id", async (req, res) => {
    const {comerciante, consumidor, puntaje} = req.body;
    const puntajeCActualizado = new puntajeCSchema({comerciante, consumidor, puntaje});
    await puntajeCSchema.findByIdAndUpdate(req.params._id, puntajeCActualizado);
})

routerPuntajeC.delete("/:_id", async (req, res) => {
    await puntajeCSchema.findByIdAndDelete(req.params._id)
})

routerPuntajeC.delete("/", async (req, res) => {
    await puntajeCSchema.remove();
})

export default routerPuntajeC;