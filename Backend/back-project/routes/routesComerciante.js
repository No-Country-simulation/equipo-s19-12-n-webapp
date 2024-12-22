import express from "express"
import comercianteSchema from "../models/comerciante.model.js"

const routerComerciante = express.Router()

routerComerciante.get("/", async (req, res) => {
    try {
        const comerciantes = await comercianteSchema.find();
        return res.json(comerciantes);
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Error al realizar la búsqueda"
        });
    }
})

routerComerciante.post("/login", async (req, res) => {
    try {
        const comerciante = await comercianteSchema.findOne({email: req.body.email});
        if (!comerciante){
            res.status(404).send({ message: "Comerciante no encontrado." });
        }
        else{
            if(comerciante.pass === req.body.pass){
                return res.json(comerciante);
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

routerComerciante.get('/negociosAderidos', async (req, res) => {
    try {
      const data = await comercianteSchema.find({ logo: { $ne: "" } }).limit(10); // Consulta MongoDB
      res.json(data); // Responde con los usuarios encontrados
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  });

routerComerciante.get("/:_id", async (req, res) => {
    try {
        const data = await comercianteSchema.findById(req.params._id);

        if (!data)
            res.status(404).send({ message: "Registro no encontrado " });
        else res.json(data);

    } catch (err) {
        res
            .status(500)
            .send({ message: "Error al buscar el registro con id = " + req.params._id });
    };
})

routerComerciante.post("/detallesVendedor/:cuit", async (req, res) => {
    try {
        const data = await comercianteSchema.findOne({cuit: req.params.cuit});

        if (!data)
            res.status(404).send({ message: "Registro no encontrado " });
        else res.json(data);

    } catch (err) {
        res
            .status(500)
            .send({ message: "Error en el servidor al buscar el registro"});
    };
})

routerComerciante.post("/", async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {cuit, nombre, direccion, rubro, ciudad, telefono, email, pass} = req.body;
        const nuevoComerciante = new comercianteSchema({cuit, nombre, direccion, ciudad, telefono, rubro, desc: "", logo: "", email, pass, img1: "", img2: "", img3: ""});
        await comercianteSchema.insertMany(nuevoComerciante);
        res.sendStatus(200).send({
            message: "Se añadieron nuevos datos correctamente"
        })
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ error: 'El comerciante ya está registrado.' });
        }
        res.status(500).send({
            message: "Error al añadir datos"
        });
    }    
})

routerComerciante.put("/:_id", async (req, res) => {   
    if (!req.body) {
        return res.status(400).send({
            message: "No se pueden enviar parámetros vacíos!"
        });
    }
    try {
        const {nombre, direccion, ciudad, rubro, desc, telefono, logo, pass, img1} = req.body;
        const comercianteActualizado = {nombre, direccion, ciudad, desc, rubro, telefono, logo, pass, img1};
        const data = await comercianteSchema.findByIdAndUpdate(req.params._id, comercianteActualizado);
        if (!data) {
            res.status(404).send({
                message: `No es posible actualizar el producto con id = ${req.params._id}.`
            });
        } else res.send({ message: "Producto actualizado correctamente." });
    }
    catch (err) {
        res.status(500).send({
            message: "Error actualizando el producto con id = " + req.params._id + err
        });
    }
})

routerComerciante.delete("/:_id", async (req, res) => {
    try {
        const data = await comercianteSchema.findByIdAndDelete(req.params._id)

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

routerComerciante.delete("/", async (req, res) => {
    try {
        const data = await comercianteSchema.remove();

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

export default routerComerciante;