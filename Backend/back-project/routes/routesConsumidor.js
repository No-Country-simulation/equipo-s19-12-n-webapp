import express from "express"
import consumidorSchema from "../models/consumidor.model.js"

const router = express.Router()

router.get("/", async (req, res) => {
    const consumidores = await consumidorSchema.find();
    res.json(consumidores);
})

router.get("/:email", async (req, res) => {
    const consumidor = await consumidorSchema.findById(req.params.email);
    res.json(consumidor);
})

router.post("/", async (req, res) => {
    const {email, pass} = req.body;
    const nuevoConsumidor = new consumidorSchema({email, pass});
    await consumidorSchema.insertMany(nuevoConsumidor);
})

router.post("/:email", async (req, res) => {
    const {email, pass} = req.body;
    const consumidorActualizado = new consumidorSchema({email, pass});
    await consumidorSchema.findByIdAndUpdate(req.params.email, consumidorActualizado);
})

router.delete("/:email", async (req, res) => {
    await consumidorSchema.findByIdAndDelete(req.params.email)
})

router.delete("/", async (req, res) => {
    await consumidorSchema.remove();
})

export default router;