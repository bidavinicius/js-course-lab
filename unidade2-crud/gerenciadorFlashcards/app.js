import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });
import { criarFlashcard } from "./flashcards/criarFC.js";
import { criarBaralho } from "./baralhos/criarDeck.js";
import { listarFlashcards } from "./flashcards/listarFC.js";
import { listarBaralhos } from "./baralhos/listarDeck.js";
import { atualizarBaralho } from "./baralhos/atualizarDeck.js";
import { atualizarFlashcards } from "./flashcards/atualizarFC.js";
import { excluirBaralho } from "./baralhos/excluirDeck.js";
import { excluirFlashcards } from "./flashcards/excluirFC.js";
import { buscarFlashcards } from "./flashcards/buscar.js";

export let baralhos = []
export let flashcards = []

export function exibirMenu(){
    console.log("Bem-vindo ao sistema de flashcards!\nSelecione a opção desejada:\n1-Criar baralho\n2-Criar flashcard\n3-Listar baralhos\n4-Listar flashcards\n5-Atualizar baralhos\n6-Atualizar flashcards\n7-Excluir baralhos\n8-Excluir flashcards\n9-Buscar flashcards\n0-Sair")
    let opcao = prompt("> ")
    opcao = parseInt(opcao)
    switch(opcao){
        case 1:
            criarBaralho()
            break
        case 2:
            criarFlashcard()
            break
        case 3:
            listarBaralhos()
            break
        case 4:
            listarFlashcards()
            break
        case 5:
            atualizarBaralho()
            break
        case 6:
            atualizarFlashcards()
            break
        case 7:
            excluirBaralho()
            break
        case 8:
            excluirFlashcards()
            break
        case 9:
            buscarFlashcards()
            break
        case 0:
            process.exit()
        default:
            console.log("Opção inválida, tente novamente")
            exibirMenu()
            break
    }
}

exibirMenu()