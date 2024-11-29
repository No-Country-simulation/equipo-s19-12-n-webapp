import express from "express"
import puntajeCSchema from "../models/puntajeC.model.js"

const routerPuntajeC = express.Router()

routerPuntajeC.get("/", async (req, res) => {
    try {
        const puntajesC = await puntajeCSchema.find();
        return res.json(puntajesC);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error al realizar la búsqueda"
        });
    }
})

routerPuntajeC.get("/:_id", async (req, res) => {
    try {
        const data = await puntajeCSchema.findById(req.params._id);

        if (!data)
            res.status(404).send({ message: "Registro no encontrado " });
        else res.json(data);

    } catch (err) {
        res
            .status(500)
            .send({ message: "Error al buscar el registro con id = " + req.params._id });
    };
})

routerPuntajeC.post("/", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {comerciante, consumidor, puntaje} = req.body;
        const nuevoPuntajeC = new puntajeCSchema({comerciante, consumidor, puntaje});
        await puntajeCSchema.insertMany(nuevoPuntajeC);
        res.sendStatus(200).send({
            message: "Se añadieron nuevos datos correctamente"
        })
    } catch (error) {
        res.status(500).send({
            message: "Error al añadir datos"
        });
    } 
})

routerPuntajeC.post("/:_id", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {comerciante, consumidor, puntaje} = req.body;
        const puntajeCActualizado = new puntajeCSchema({comerciante, consumidor, puntaje});
        const data = await puntajeCSchema.findByIdAndUpdate(req.params._id, puntajeCActualizado);
        if (!data) {
            res.status(404).send({
                message: `No es posible actualizar el producto con id = ${req.params._id}.`
            });
        } else res.send({ message: "Producto actualizado correctamente." });
    }
    catch (err) {
        res.status(500).send({
            message: "Error actualizando el producto con id = " + req.params._id
        });
    }
})

routerPuntajeC.delete("/:_id", async (req, res) => {
    try {
        const data = await puntajeCSchema.findByIdAndDelete(req.params._id)

        if (!data) {
            res.status(404).send({
                message: `No fue posible borrar el registro con el id = ${req.params._id}.`
            });
        } else {
            res.send({
                message: "El registro fue borrado correctamente!"
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error, no fue posible borrar el registro con el id = " + req.params._id
        });
    }
})

routerPuntajeC.delete("/", async (req, res) => {
    try {
        const data = await puntajeCSchema.remove();

        if (!data) {
            res.status(404).send({
                message: `No fue posible borrar los registros.`
            });
        } else {
            res.send({
                message: "Todos los registros has sido borrados correctamente!"
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error, no fue posible borrar los registros"
        });
    }
})

export default routerPuntajeC;