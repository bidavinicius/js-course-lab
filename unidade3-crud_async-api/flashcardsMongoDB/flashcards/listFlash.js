import { Flashcard } from "../schemas/flashcard_schema.js";

const getFlashcards = async() => {
    try{
        return await Flashcard.find()
    }catch(error){
        console.error("Erro ao buscar os flashcards:", error.message)
        throw error
    }
}

export async function listFlash(req, res) {
    const flashcards = await getFlashcards()
    res.status(200).send(flashcards)
}