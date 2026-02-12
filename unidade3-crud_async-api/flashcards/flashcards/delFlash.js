import { flashcards } from "./postFlash.js";

export function delFlash(req,res){
    const idDeletar = parseInt(req.params.id)
    const index = flashcards.findIndex(flashcard => flashcard.id === idDeletar)
    if(index == -1){
        res.status(404).send("Nenhum flashcard com esse ID foi encontrado")
    }

    flashcards.splice(index,1)

    res.status(200).send("Flashcard deletado com sucesso")
}