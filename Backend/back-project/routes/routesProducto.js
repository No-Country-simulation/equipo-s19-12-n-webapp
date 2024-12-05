import express from "express"
import productoSchema from "../models/producto.model.js"

const routerProducto = express.Router()

routerProducto.get("/", async (req, res) => {
    try {
        const productos = await productoSchema.find();
        return res.json(productos);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error al realizar la búsqueda"
        });
    }
})

routerProducto.get("/:_id", async (req, res) => {
    try {
        const data = await productoSchema.findById(req.params._id);

        if (!data)
            res.status(404).send({ message: "Registro no encontrado " });
        else res.json(data);

    } catch (err) {
        res
            .status(500)
            .send({ message: "Error al buscar el registro con id = " + req.params._id });
    };
})

routerProducto.post("/", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {nombre, desc, precio, stock, img, comerciante, vencimiento, estado, categoria} = req.body;
        const nuevoProducto = new productoSchema({nombre, desc, precio, stock, img, comerciante, vencimiento, estado, categoria});
        await productoSchema.insertMany(nuevoProducto);
        res.sendStatus(200).send({
            message: "Se añadieron nuevos datos correctamente"
        })
    } catch (error) {
        res.status(500).send({
            message: "Error al añadir datos"
        });
    } 
})

routerProducto.put("/:_id", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {nombre, desc, precio, stock, img, comerciante, vencimiento, estado, categoria} = req.body;
        const productoActualizado = {nombre, desc, precio, stock, img, comerciante, vencimiento, estado, categoria};
        const data = await productoSchema.findByIdAndUpdate(req.params._id, productoActualizado);
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

routerProducto.delete("/:_id", async (req, res) => {
    try {
        const data = await productoSchema.findByIdAndDelete(req.params._id)

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

routerProducto.delete("/", async (req, res) => {
    try {
        const data = await productoSchema.remove();

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

export default routerProducto;