import express from "express"
import comercianteSchema from "../models/comerciante.model.js"

const routerComerciante = express.Router()

routerComerciante.get("/", async (req, res) => {
    const comerciantes = await comercianteSchema.find();
    res.json(comerciantes);
})

routerComerciante.get("/:email", async (req, res) => {
    const comerciante = await comercianteSchema.findById(req.params.email);
    res.json(comerciante);
})

routerComerciante.post("/", async (req, res) => {
    const {nombre, direccion, telefono, logo, email, pass, img1, img2, img3} = req.body;
    const nuevoComerciante = new comercianteSchema({nombre, direccion, telefono, logo, email, pass, img1, img2, img3});
    await comercianteSchema.insertMany(nuevoComerciante);
})

routerComerciante.post("/:_id", async (req, res) => {
    const {nombre, direccion, telefono, logo, email, pass, img1, img2, img3} = req.body;
    const comercianteActualizado = new comercianteSchema({nombre, direccion, telefono, logo, email, pass, img1, img2, img3});
    await comercianteSchema.findByIdAndUpdate(req.params._id, comercianteActualizado);
})

routerComerciante.delete("/:_id", async (req, res) => {
    await comercianteSchema.findByIdAndDelete(req.params._id)
})

routerComerciante.delete("/", async (req, res) => {
    await comercianteSchema.remove();
})

export default routerComerciante;