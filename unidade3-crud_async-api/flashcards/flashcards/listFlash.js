import { flashcards } from "./postFlash.js";

export function listFlash(req,res){
    res.status(200).json(flashcards)
}

export function buscaFlash(req,res){
    const { id, pergunta } = req.query

    let resultado = flashcards;

    if (id) {
        resultado = resultado.filter(flashcard => 
            flashcard.id.includes(id)
        );
    }

    if (pergunta) {
        resultado = resultado.filter(flashcard => 
            flashcard.pergunta.toLowerCase().includes(pergunta.toLowerCase())
        );
    }
    
    res.status(200).json(resultado);
}