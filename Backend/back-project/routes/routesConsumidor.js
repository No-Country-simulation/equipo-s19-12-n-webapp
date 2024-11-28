import express from "express"
import consumidorSchema from "../models/consumidor.model.js"

const routerConsumidor = express.Router()

routerConsumidor.get("/", async (req, res) => {
    const consumidores = await consumidorSchema.find();
    res.json(consumidores);
})

routerConsumidor.get("/:email", async (req, res) => {
    const consumidor = await consumidorSchema.findById(req.params.email);
    res.json(consumidor);
})

routerConsumidor.post("/", async (req, res) => {
    const {email, pass} = req.body;
    const nuevoConsumidor = new consumidorSchema({email, pass});
    await consumidorSchema.insertMany(nuevoConsumidor);
})

routerConsumidor.post("/:email", async (req, res) => {
    const {email, pass} = req.body;
    const consumidorActualizado = new consumidorSchema({email, pass});
    await consumidorSchema.findByIdAndUpdate(req.params.email, consumidorActualizado);
})

routerConsumidor.delete("/:email", async (req, res) => {
    await consumidorSchema.findByIdAndDelete(req.params.email)
})

routerConsumidor.delete("/", async (req, res) => {
    await consumidorSchema.remove();
})

export default routerConsumidor;