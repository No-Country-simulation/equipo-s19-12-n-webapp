import express from "express"
import comercianteSchema from "../models/comerciante.model.js"

const router = express.Router()

router.get("/", async (req, res) => {
    const comerciantes = await comercianteSchema.find();
    res.json(comerciantes);
})

router.get("/:email", async (req, res) => {
    const comerciante = await comercianteSchema.findById(req.params.email);
    res.json(comerciante);
})

router.post("/", async (req, res) => {
    const {nombre, direccion, telefono, logo, email, pass, img1, img2, img3} = req.body;
    const nuevoComerciante = new comercianteSchema({nombre, direccion, telefono, logo, email, pass, img1, img2, img3});
    await comercianteSchema.insertMany(nuevoComerciante);
})

router.post("/:_id", async (req, res) => {
    const {nombre, direccion, telefono, logo, email, pass, img1, img2, img3} = req.body;
    const comercianteActualizado = new comercianteSchema({nombre, direccion, telefono, logo, email, pass, img1, img2, img3});
    await comercianteSchema.findByIdAndUpdate(req.params._id, comercianteActualizado);
})

router.delete("/:_id", async (req, res) => {
    await comercianteSchema.findByIdAndDelete(req.params._id)
})

router.delete("/", async (req, res) => {
    await comercianteSchema.remove();
})

export default router;