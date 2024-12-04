import express from "express"
import consumidorSchema from "../models/consumidor.model.js"

const routerConsumidor = express.Router()

routerConsumidor.get("/", async (req, res) => {
    try {
        const consumidores = await consumidorSchema.find();
        return res.json(consumidores);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error al realizar la búsqueda"
        });
    }
})

routerConsumidor.get("/login", async (req, res) => {
    try {
        const consumidor = await consumidorSchema.findOne({email: req.body.email});
        if (!consumidor){
            res.status(404).send({ message: "Consumidor no encontrado." });
        }
        else{
            if(consumidor.pass === req.body.pass){
                return res.json(consumidor);
            }
            else{
                res.status(401).send({ message: "Contraseña inválida." });
            }
        }
        
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error al realizar la búsqueda"
        });
    }
})

routerConsumidor.get("/:email", async (req, res) => {
    try {
        const data = await consumidorSchema.findById(req.params.email);

        if (!data)
            res.status(404).send({ message: "Registro no encontrado " });
        else res.json(data);

    } catch (err) {
        res
            .status(500)
            .send({ message: "Error al buscar el registro con id = " + req.params.email });
    };
})

routerConsumidor.post("/", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {email, pass} = req.body;
        const nuevoConsumidor = new consumidorSchema({email, pass});
        await consumidorSchema.insertMany(nuevoConsumidor);
        res.sendStatus(200).send({
            message: "Se añadieron nuevos datos correctamente"
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'Este email corresponde a un usuario ya registrado.' });
        }
        res.status(500).send({
            message: "Error al añadir datos"
        });
    } 
})

routerConsumidor.put("/:email", async (req, res) => {

    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {pass} = req.body;
        const consumidorActualizado = {pass};
        const data = await consumidorSchema.findByIdAndUpdate(req.params.email, consumidorActualizado);
        if (!data) {
            res.status(404).send({
                message: `No es posible actualizar el producto con email = ${req.params.email}.`
            });
        } else res.send({ message: "Producto actualizado correctamente." });
    }
    catch (err) {
        res.status(500).send({
            message: "Error actualizando el producto con email = " + req.params.email
        });
    }
})

routerConsumidor.delete("/:email", async (req, res) => {
    try {
        const data = await consumidorSchema.findByIdAndDelete(req.params.email)

        if (!data) {
            res.status(404).send({
                message: `No fue posible borrar el registro con el email = ${req.params.email}.`
            });
        } else {
            res.send({
                message: "El registro fue borrado correctamente!"
            });
        }
    } catch (err) {
        res.status(500).send({
            message: "Error, no fue posible borrar el registro con el email = " + req.params.email
        });
    }
})

routerConsumidor.delete("/", async (req, res) => {
    try {
        const data = await consumidorSchema.remove();

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

export default routerConsumidor;