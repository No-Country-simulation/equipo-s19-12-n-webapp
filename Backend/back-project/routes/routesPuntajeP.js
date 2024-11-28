import express from "express"
import puntajePSchema from "../models/puntajeP.model.js"

const routerPuntajeP = express.Router()

routerPuntajeP.get("/", async (req, res) => {
    const puntajesP = await puntajePSchema.find();
    res.json(puntajesP);
})

routerPuntajeP.get("/:_id", async (req, res) => {
    const puntajeP = await puntajePSchema.findById(req.params._id);
    res.json(puntajeP);
})

routerPuntajeP.post("/", async (req, res) => {
    const {producto, consumidor, puntaje} = req.body;
    const nuevoPuntajeP = new puntajePSchema({producto, consumidor, puntaje});
    await puntajePSchema.insertMany(nuevoPuntajeP);
})

routerPuntajeP.post("/:_id", async (req, res) => {
    const {producto, consumidor, puntaje} = req.body;
    const puntajePActualizado = new puntajePSchema({producto, consumidor, puntaje});
    await puntajePSchema.findByIdAndUpdate(req.params._id, puntajePActualizado);
})

routerPuntajeP.delete("/:_id", async (req, res) => {
    await puntajePSchema.findByIdAndDelete(req.params._id)
})

routerPuntajeP.delete("/", async (req, res) => {
    await puntajePSchema.remove();
})

export default routerPuntajeP;