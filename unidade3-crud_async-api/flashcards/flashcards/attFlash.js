import { flashcards } from "./postFlash.js";

export function attFlash(req,res){
    const idAtt = parseInt(req.params.id)
    const index = flashcards.findIndex(flashcard => flashcard.id === idAtt)
    if(index == -1){
        res.status(404).send("Nenhum flashcard com esse id foi encontrado")
    }

    let flashcardOriginal = flashcards[index]
    let novoFlashcard = req.body

    const flashcardAtualizado = {
        ...flashcardOriginal,
        ...novoFlashcard
    }

    flashcards[index] = flashcardAtualizado

    res.status(200).send("Flashcard atualizado com sucesso!")
}