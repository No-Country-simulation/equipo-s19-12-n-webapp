import express from "express"
import puntajeCSchema from "../models/puntajeC.model.js"

const router = express.Router()

router.get("/", async (req, res) => {
    const puntajesC = await puntajeCSchema.find();
    res.json(puntajesC);
})

router.get("/:_id", async (req, res) => {
    const puntajeC = await puntajeCSchema.findById(req.params._id);
    res.json(puntajeC);
})

router.post("/", async (req, res) => {
    const {comerciante, consumidor, puntaje} = req.body;
    const nuevoPuntajeC = new puntajeCSchema({comerciante, consumidor, puntaje});
    await puntajeCSchema.insertMany(nuevoPuntajeC);
})

router.post("/:_id", async (req, res) => {
    const {comerciante, consumidor, puntaje} = req.body;
    const puntajeCActualizado = new puntajeCSchema({comerciante, consumidor, puntaje});
    await puntajeCSchema.findByIdAndUpdate(req.params._id, puntajeCActualizado);
})

router.delete("/:_id", async (req, res) => {
    await puntajeCSchema.findByIdAndDelete(req.params._id)
})

router.delete("/", async (req, res) => {
    await puntajeCSchema.remove();
})

export default router;