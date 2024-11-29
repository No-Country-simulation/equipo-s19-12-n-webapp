import express from "express"
import compraSchema from "../models/compra.model.js"

const routerCompra = express.Router()

routerCompra.get("/", async (req, res) => {
    try {
        const compras = await compraSchema.find();
        return res.json(compras);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error al realizar la búsqueda"
        });
    }
})

routerCompra.get("/:_id", async (req, res) => {
    try {
        const data = await compraSchema.findById(req.params._id);

        if (!data)
            res.status(404).send({ message: "Registro no encontrado " });
        else res.json(data);

    } catch (err) {
        res
            .status(500)
            .send({ message: "Error al buscar el registro con id = " + req.params._id });
    };
})

routerCompra.post("/", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {consumidor, precioT, fecha} = req.body;
        const nuevaCompra = new compraSchema({consumidor, comerciante, precioT, fecha});
        await compraSchema.insertMany(nuevaCompra);
        res.sendStatus(200).send({
            message: "Se añadieron nuevos datos correctamente"
        })
    } catch (error) {
        res.status(500).send({
            message: "Error al añadir datos"
        });
    }  
})

routerCompra.post("/:_id", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {consumidor, precioT, fecha} = req.body;
        const compraActualizado = new compraSchema({consumidor, comerciante, precioT, fecha});
        const data = await compraSchema.findByIdAndUpdate(req.params._id, compraActualizado);
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

routerCompra.delete("/:_id", async (req, res) => {
    try {
        const data = await compraSchema.findByIdAndDelete(req.params._id)

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

routerCompra.delete("/", async (req, res) => {
    try {
        const data = await compraSchema.remove();

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

export default routerCompra;