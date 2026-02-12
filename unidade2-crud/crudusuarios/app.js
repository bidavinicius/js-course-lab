import PromptSync from "prompt-sync";
export const prompt = PromptSync({ sigint: true });
import { adicionarUsuario } from "./adicionar.js";
import { listarUsuarios } from "./listar.js";
import { editarUsuario } from "./editar.js";
import { removerUsuario } from "./remover.js";

export let usuarios = []
export let telefones = []
export let novosTelefones = []

export function exibirMenu(){
    console.clear()
    console.log("----CADASTRO----")
    console.log("Selecione a opção desejada:\n1-Adicionar usuário\n2-Listar usuários\n3-Atualizar usuário\n4-Remover usuário\n0-Sair\n")
    let opcao = prompt("> ")
    opcao = parseInt(opcao)
    switch(opcao){
        case 1:
            adicionarUsuario()
            break
        case 2:
            listarUsuarios()
            break
        case 3:
            editarUsuario()
            break
        case 4:
            removerUsuario()
            break
        case 0:
            process.exit()
        default:
            console.log("Opção inválida, tente novamente.")
            exibirMenu()
            break
    }
}

exibirMenu()