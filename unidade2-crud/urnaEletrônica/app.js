import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });
import { cadastroCandidato } from "./cadastro.js";
import { registroVotos } from "./votar.js";

export let candidatos = []
export let numsCandidato = []

export function exibirMenu(){
    console.log("----URNA ELETRÔNICA----")
    console.log("Selecione a opção desejada:\n1-Votar\n2-Cadastrar candidatos\n3-Finalizar/Apuração de votos\n")
    let opcao = prompt("> ")
    switch(opcao){
        case "1":
            registroVotos()
            break
        case "2":
            cadastroCandidato(numsCandidato)
            break
        case "3":
            apuracao()
            process.exit()
        default:
            console.log("Opção inválida, tente novamente")
            exibirMenu()
    }
}

exibirMenu()