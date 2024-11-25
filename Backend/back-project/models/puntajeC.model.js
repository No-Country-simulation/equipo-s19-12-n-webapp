import mongoose from "mongoose";

const schema = mongoose.Schema;

const puntajeCSchema = new schema({
    comerciante: Number,
    consumidor: Number,
    puntaje: Number,
})

const PuntajeC = mongoose.model("PuntajeC", puntajeCSchema, "PuntajeC");

export default PuntajeC;