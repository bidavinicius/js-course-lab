import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    }
})

export const Produto = mongoose.model('produto', productSchema)