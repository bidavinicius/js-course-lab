import mongoose from "mongoose";

const flashcardSchema = new mongoose.Schema({
    pergunta: {
        type: String,
        required: true
    },
    resposta: {
        type: String,
        required: true
    },
    idBaralho: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "deck"
    }
})

export const Flashcard = mongoose.model('flashcard', flashcardSchema)