import { baralhos } from "./postDeck.js";
import { flashcards } from "../flashcards/postFlash.js";

export function delDeck(req,res){
    const idDeletar = parseInt(req.params.id)
    const index = baralhos.findIndex(baralho => baralho.id === idDeletar)
    if(index == -1){
        res.status(404).send("Nenhum baralho com esse ID foi encontrado")
    }

    let flashcardsRestantes = flashcards.filter(flashcard => flashcard.idBaralho !== idDeletar);
      flashcards.length = 0
      flashcards.push(...flashcardsRestantes)

    baralhos.splice(index,1)

    res.status(200).send("Baralho deletado com sucesso")
}