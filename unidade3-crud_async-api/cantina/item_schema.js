import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    diaSemana: {
        type: String,
        required: true
    }
})

export const Item = mongoose.model('item', itemSchema)