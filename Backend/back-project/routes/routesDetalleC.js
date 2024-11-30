import express from "express"
import detalleCSchema from "../models/detalleC.model.js"

const routerDetalleC = express.Router()

routerDetalleC.get("/", async (req, res) => {
    try {
        const detalleCs = await detalleCSchema.find();
        return res.json(detalleCs);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error al realizar la búsqueda"
        });
    }
})

routerDetalleC.get("/:_id", async (req, res) => {
    try {
        const data = await detalleCSchema.findById(req.params._id);

        if (!data)
            res.status(404).send({ message: "Registro no encontrado " });
        else res.json(data);

    } catch (err) {
        res
            .status(500)
            .send({ message: "Error al buscar el registro con id = " + req.params._id });
    };
})

routerDetalleC.post("/", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {compra, articulo, cantidad} = req.body;
        const nuevoDetalleC = new detalleCSchema({compra, articulo, cantidad});
        await detalleCSchema.insertMany(nuevoDetalleC);
        res.sendStatus(200).send({
            message: "Se añadieron nuevos datos correctamente"
        })
    } catch (error) {
        res.status(500).send({
            message: "Error al añadir datos"
        });
    } 
})

routerDetalleC.put("/:_id", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {compra, articulo, cantidad} = req.body;
        const detalleCActualizado = new detalleCSchema({compra, articulo, cantidad});
        const data = await detalleCSchema.findByIdAndUpdate(req.params._id, detalleCActualizado);
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

routerDetalleC.delete("/:_id", async (req, res) => {
    try {
        const data = await detalleCSchema.findByIdAndDelete(req.params._id)

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

routerDetalleC.delete("/", async (req, res) => {
    try {
        const data = await detalleCSchema.remove();

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

export default routerDetalleC;