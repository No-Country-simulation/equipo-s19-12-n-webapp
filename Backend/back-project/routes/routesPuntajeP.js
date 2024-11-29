import express from "express"
import puntajePSchema from "../models/puntajeP.model.js"

const routerPuntajeP = express.Router()

routerPuntajeP.get("/", async (req, res) => {
    try {
        const puntajesP = await puntajePSchema.find();
        return res.json(puntajesP);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error al realizar la búsqueda"
        });
    }
})

routerPuntajeP.get("/:_id", async (req, res) => {
    try {
        const data = await puntajePSchema.findById(req.params._id);

        if (!data)
            res.status(404).send({ message: "Registro no encontrado " });
        else res.json(data);

    } catch (err) {
        res
            .status(500)
            .send({ message: "Error al buscar el registro con id = " + req.params._id });
    };
})

routerPuntajeP.post("/", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {producto, consumidor, puntaje} = req.body;
        const nuevoPuntajeP = new puntajePSchema({producto, consumidor, puntaje});
        await puntajePSchema.insertMany(nuevoPuntajeP);
        res.sendStatus(200).send({
            message: "Se añadieron nuevos datos correctamente"
        })
    } catch (error) {
        res.status(500).send({
            message: "Error al añadir datos"
        });
    } 
})

routerPuntajeP.post("/:_id", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {producto, consumidor, puntaje} = req.body;
        const puntajePActualizado = new puntajePSchema({producto, consumidor, puntaje});
        const data = await puntajePSchema.findByIdAndUpdate(req.params._id, puntajePActualizado);
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

routerPuntajeP.delete("/:_id", async (req, res) => {    
    try {
        const data = await puntajePSchema.findByIdAndDelete(req.params._id)

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

routerPuntajeP.delete("/", async (req, res) => {
    try {
        const data = await puntajePSchema.remove();

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

export default routerPuntajeP;