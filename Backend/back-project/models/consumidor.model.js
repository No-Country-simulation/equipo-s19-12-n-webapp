import mongoose from "mongoose";

const schema = mongoose.Schema;

const consumidorSchema = new schema({
    email: String,
    pass: String,
})

const Consumidor = mongoose.model("Consumidor", consumidorSchema, "Consumidor");

export default Consumidor;