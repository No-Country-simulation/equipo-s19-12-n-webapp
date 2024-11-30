import mongoose from "mongoose";

const schema = mongoose.Schema;

const comercianteSchema = new schema({
    cuit: Number,
    nombre: String,
    email: String,
    pass: String,
    direccion: String,
    ciudad: Number,
    telefono: Number,
    logo: String,
    img1: String,
    img2: String,
    img3: String,
})

const Comerciante = mongoose.model("Comerciante", comercianteSchema, "Comerciante");

export default Comerciante;